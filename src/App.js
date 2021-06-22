import './style.css';
import ListBox from './ListBox'
import React, { useState } from 'react'
import GenerateCalendar from './DisplayCalendar'
import Popup from './Popup'

const GetWeekDays = (() => {
    //creates the name of days
    const nameOfDaysArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    ' Thursday', 'Friday', 'Saturday' ];
    const nameOfDays = nameOfDaysArray.map((element, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <p className = 'days'  key = { index }> {element} </p>)
    return (
        <div className = 'display-flex'>
            {nameOfDays}
        </div>
    )
});

var events = {};

function App() {
  const [ month, setMonth ] = useState('01');
  const [ year, setYear ] = useState('01');
  //DateButton click
  const [ clicked, setClicked ] = useState();
  const arrayMonths = [ 'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December' ];
  const arrayMonthsValues = [ '01', '02', '03', '04', '05', '06', 
  '07', '08', '09', '10', '11', '12' ];
  const arrayYears = [];
  const arrayYearsValues = [];
  //generating yearArray
  let yearIterator = 2001;
  while (yearIterator !== 2031) {
    const yearString = yearIterator.toString();
    arrayYears.push(yearString);
    arrayYearsValues.push(yearString.substring(2, 4));
    yearIterator += 1;
  }
  return (
      <>
          <h1 className = 'heading'>Calendar</h1>
          <div className = 'display-flex' key = 'd1'>
              <ListBox setVal = { (x) => setMonth(x) } array = { arrayMonths } arrayValues = { arrayMonthsValues } key = "m"/>
              <ListBox setVal = { (x) => setYear(x) } array = { arrayYears } arrayValues = { arrayYearsValues }  key = "y"/>
          </div>
          <GetWeekDays />
          <GenerateCalendar setValC = { (x) => setClicked(x) } month = { month } year = { year } />
          { (clicked != null ? <Popup setValC = { (x) => setClicked(x) } 
    events = { events }  element = { clicked } month = { month } year = { year }/> : null)}  
      </>
  )
}
export default App;
