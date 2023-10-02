import React from 'react'
import './Ctabox.scss'

function Ctabox(props) {
    return (
        <div className='cta-box'>
            <h2>{props.text}</h2>
            <button type={props.type || "button"}>{props.btntxt}</button>
        </div>
    )
}

export default Ctabox