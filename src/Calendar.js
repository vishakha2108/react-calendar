/* eslint-disable react/prop-types */
import './style.css'
import React from 'react'
const Day = ({ visible, innerText, setValC }) => {
    return(
        <button className = { (visible===true)?'numeric-date':'hide numeric-date' } key = { innerText } 
        onClick = { (e) => setValC(e.target) } >{innerText}</button>
    )

}
const Week = ({ startText, noOfDays, setValC }) => {
    let i = startText;
    const days = [];
    for ( let j = 0; j < 7; j++ ){
        days.push(<Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC } key = { i }/>)
    }
    return(
        <div className ='week display-flex'>
            {days}
        </div>
    )
}
const Calendar = ({ setValC, month, year }) => {
    const userDate = new Date(`20${ year }`, month - 1);
    //getting the number of the day on which this month starts
    const day = userDate.getDay();
    let week = 1;
    const noOfDays = new Date(`20${ year }`, month, 0).getDate();
    const weeks = [];
    let count = 1
    for ( let i = 0; i < 6; i++ ){
        weeks.push(<Week startText = { -day+count } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>)
        count+=7;
    }
    return(
        <div className = "inner">
            {weeks}
        </div >
    )

}

export default Calendar;
