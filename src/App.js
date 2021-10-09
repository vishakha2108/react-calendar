import './style.css';
import ListBox from './ListBox'
import React, { useState } from 'react'
import Calendar from './Calendar'
import Popup from './Popup'

const WeekDays = (() => {
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
function App() {
  const [ events, addEvent ] = useState({ })
   function cacheEvents(setValM, key, value){
    //for storing the memo values
    if([ key ] in events)
    {
        addEvent({ ...events ,  [ key ] : [ ...events[ key ], value ] } );
    }
    else{

        addEvent({ ...events ,  [ key ] : [ value ] } );
    }
    setValM(false);
}
  
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
  let elementPopup = null;
  if(clicked!=null)
  {
    elementPopup = <Popup setValC = { setClicked } events = { events } addEvents = { cacheEvents } element = { clicked } month = { month } year = { year }/> 
  }
  return (
      <>
          <h1 className = 'heading'>Calendar</h1>
          <div className = 'display-flex' key = 'd1'>
              <ListBox setValC = { setClicked } setVal = { setMonth } array = { arrayMonths } arrayValues = { arrayMonthsValues } key = "m"/>
              <ListBox setValC = { setClicked } setVal = { setYear } array = { arrayYears } arrayValues = { arrayYearsValues }  key = "y"/>
          </div>
          <WeekDays />
          <Calendar setValC = { setClicked } month = { month } year = { year } />
          {elementPopup}
      </>
  )
}
export default App;
