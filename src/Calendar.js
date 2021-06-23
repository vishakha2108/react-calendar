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
    return(
        <div className ='week display-flex'>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
            <Day visible = { (i>0&&i<=noOfDays?true:false) } innerText = { i++ } setValC = { setValC }/>
        </div>
    )

}
const Calendar = ({ setValC, month, year }) => {
    const userDate = new Date(`20${ year }`, month - 1);
    //getting the number of the day on which this month starts
    const day = userDate.getDay();
    let week = 1;
    const noOfDays = new Date(`20${ year }`, month, 0).getDate();
    return(
        <div className = "inner">
            <Week startText = { -day+1 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
            <Week startText = { -day+8 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
            <Week startText = { -day+15 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
            <Week startText = { -day+22 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
            <Week startText = { -day+29 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
            <Week startText = { -day+36 } noOfDays = { noOfDays } key = { week++ } setValC = { setValC }/>
        </div >
    )

}

export default Calendar;
