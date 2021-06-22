/* eslint-disable react/prop-types */
import './style.css';
import React, { useState } from 'react'
import Memo from './Memo'

function Popup({ setValC, events, element, month, year }) {
    const [ , addContent ] = useState(0);
    const[ memo, memoClicked ] = useState(false);
    const x = element.getBoundingClientRect().right;
    const y = element.getBoundingClientRect().top - 5;
    const arrowStyle = {
        left :`${ x }px`,
        top : `${ y + 10 }px`
    }
    const rectStyle = {
        left :`${ x + 20 }px`,
        top : `${ y - 25 }px`
    }
    const index = `${ element.innerText }/${ month }/${ year }`;
    const array = events[ index ];
    let memos = '';
    if(array !== undefined)
    {
        // eslint-disable-next-line react/no-array-index-key
        memos = array.map( (ele, n) => (<div key ={ n }> -&gt;&nbsp;&nbsp; {ele} </div>) )
    }
    return(
        <div >
            <div className = 'arrowleft' style = { arrowStyle }></div>
            <div className = 'popup display-flex' style = { rectStyle }>
                <div className = 'close-icon' onClick = { () => setValC(null) }>x</div> 
                <div className = 'memos'> {memos} </div>
                <button onClick = { () => memoClicked(true) } className = 'button'>Add Memo</button>
            </div>
            {(memo === true ? <Memo addContent = { (p) => addContent(p) } setValM = { (p) => memoClicked(p) }
            events = { events } element = { element } month = { month } year = { year }/> : null) }
        </div>
    )
}
export default Popup;
