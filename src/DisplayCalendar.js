/* eslint-disable react/prop-types */
import './style.css'
import React from 'react'
function CreateWeek(buttons, week){
    return(
        <div className = 'week display-flex' key = {week}>{buttons}</div>
    )
}

function GenerateButtons({setValC, month, year}) {
    const userDate = new Date(`20${year}`, month - 1);
    //getting the number of the day on which this month starts
    const day = userDate.getDay();
    const dateButtons = [];
    //No of Days in the month
    let buttons = [];
    let week = 1;
    const noOfDays = new Date(`20${year}`, month, 0).getDate();
    let keyCount = 0;
    for (let i = 0; i <day; i++) {
        buttons.push(<button className = 'hide numeric-date' key = {keyCount}></button>)
        keyCount++;
    }
    let count = day ;
    for (let i = 1; i <= noOfDays; i++) {
        count++;
        buttons.push(<button className = 'numeric-date' key = {keyCount} onClick = {(e) => setValC(e.target)}>{i}</button>)
        if(count === 7)
        {
            dateButtons.push(CreateWeek(buttons,week));
            week++;
            count = 0;
            buttons = [];
        }
        keyCount++;
    }
    for (let i = (count + noOfDays + 1); count !== 7; i++) {
        count++;
        buttons.push(<button className = 'hide numeric-date' key = {keyCount}></button>)
        keyCount++;
    }
    week++;
    dateButtons.push(CreateWeek(buttons, week));
    return(
        <div className = "inner" key = 'innerCalendar'>{dateButtons}</div>
    )
}
export default GenerateButtons;
