/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import './style.css'

function cacheEvents(addContent, setValM, events, key, value){
    //for storing the memo values
    if(key in events)
    {
        events[key].push(value);
    }
    else{
        events[key] = [value];
    }
    setValM(false);
    addContent(value);
}

function Memo({addContent, setValM, events, element, month , year}){
    const [event, setEvent] = useState();
    const index = `${element.innerText}/${month}/${year}`;
    return(
        <>
        <div className = 'enterMemo display-flex'>
            <div className = 'box display-flex'>
                <div className = 'close-icon' onClick = {() => setValM(false)}>x</div>   
                <input className = 'memoObject' type = 'text' onChange = {(e) => {setEvent(e.target.value)}}></input>
                <button className = 'memoObject' onClick = 
                {() => {cacheEvents(addContent, setValM, events, index, event)}}>Add</button>
            </div>
        </div>
        </>
    )
}
export default Memo;
