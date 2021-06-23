/* eslint-disable react/prop-types */
import React,{ useState } from 'react'
//import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './style.css'

function cacheEvents(addContent, setValM, events, key, value){
    //for storing the memo values
    if(key in events)
    {
        events[ key ].push(value);
    }
    else{
        events[ key ] = [ value ];
    }
    setValM(false);
    addContent(value);
}

function Memo({ x, y, addContent, setValM, events, element, month , year }){
    const [ event, setEvent ] = useState();
    const index = `${ element.innerText }/${ month }/${ year }`;
    const memoBoxStyle = {
        left :`${ x + 20 }px`,
        top : `${ y - 5 }px`
    }
    const arrowStyle = {
        left :`${ x }px`,
        top : `${ y + 35 }px`
    }
    return(
        <>
            <div className = 'enterMemo display-flex' >
                <div className = 'arrowleftMemo' style = { arrowStyle }></div>
                <div className = 'box display-flex'style = { memoBoxStyle }>
                    <div className = 'close-icon' onClick = { () => setValM(false) }>x</div>   
                    <input className = 'memoObject' type = 'text' onChange = { (e) => {setEvent(e.target.value)} }></input>
                    <button className = 'memoObject' onClick = 
                        { () => {cacheEvents(addContent, setValM, events, index, event)} }>Add</button>
                </div>
            </div>
        </>
    )
}
export default Memo;
