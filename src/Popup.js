/* eslint-disable react/prop-types */
import './style.css';
import React, { useState } from 'react'
import Memo from './Memo'

function Popup({ setValC, events,addEvents , element, month, year }) {
    const [ memo, memoClicked ] = useState(false);
    const x = element.getBoundingClientRect().right;
    const y = element.getBoundingClientRect().top - 5;
    const arrowStyle = {
        left :`${ x }px`,
        top : `${ y + 35 }px`
    }
    const rectStyle = {
        left :`${ x + 20 }px`,
        top : `${ y - 5 }px`
    }
    const index = `${ element.innerText }/${ month }/${ year }`;
    let memos = '';
    if(events[ index ]!== undefined)
    {
        // eslint-disable-next-line react/no-array-index-key
        memos = events[ index ].map( (ele, n) => (<div key ={ n }> -&gt;&nbsp;&nbsp;{ele}</div>) )
    }
    let elementMemo = null;
    if(memo === true){
        elementMemo = <Memo x = { x } y = { y }  setValM = { memoClicked }  addEvents = { addEvents }
        element = { element } month = { month } year = { year }/> 
    }

    return(
        <div >
            <div className = 'arrowleft' style = { arrowStyle }></div>
            <div className = 'popup display-flex' style = { rectStyle }>
                <div className = 'close-icon' onClick = { () =>{setValC(null)} }>x</div> 
                <div className = 'memos'> {memos} </div>
                <button onClick = { () => memoClicked(true) } className = 'button'>Add Memo</button>
            </div>
            {elementMemo}
        </div>
    )
}
export default Popup;
