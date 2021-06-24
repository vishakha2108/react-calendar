/* eslint-disable react/prop-types */
import React,{ useState } from 'react'
import './style.css'

function Memo({ x, y, setValM , addEvents, element, month , year }){
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
                        { () => {addEvents( setValM, index, event)} }>Add</button>
                </div>
            </div>
        </>
    )
}
export default Memo;
