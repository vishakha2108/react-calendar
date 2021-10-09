/* eslint-disable react/prop-types */
import './style.css'
import React from 'react'

const ListBox = (({ setValC, setVal, array , arrayValues }) => {
    //Component creating a dropdown menu
    function handleChange(e){
        setVal(e.target.value);
        setValC(null);

    }
    const options = array.map( (element, index) => 
    // eslint-disable-next-line react/no-array-index-key
    (<option value = { arrayValues[ index ] } key = { index }>{element}</option>) );
    return(
        <select className = 'drop-down' onChange = { (e) => handleChange(e) }>{options}
        </select >
    )
});
export default ListBox;
