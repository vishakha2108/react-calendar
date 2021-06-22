/* eslint-disable react/prop-types */
import './style.css'
import React from 'react'

const ListBox = (({setVal, array , arrayValues}) => {
    //Component creating a dropdown menu
    const options = array.map( (element, index) => 
    (<option value = {arrayValues[index]} key = {index}>{element}</option>) );
    return(
        <select className = 'drop-down' onChange = {(e) => setVal(e.target.value)}>{options}
        </select >
    )
});
export default ListBox;
