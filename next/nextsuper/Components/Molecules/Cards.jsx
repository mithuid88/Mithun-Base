import React from 'react'
import "./Cards.scss"

function Cards(props) {
    return (
        <div className={`card ${props.class}`}>
            <h2>{props.headerText}</h2>
            <p>{props.text}</p>
            <p>{props.btntxt}</p>
        </div >
    )
}

export default Cards