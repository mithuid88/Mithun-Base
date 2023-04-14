import React from 'react'
import './HomeBanner.scss'

function HomeBanner(props) {
    return (
        <div className={`banner ${props.class}`}>
            <a href={props.href}>{props.text}</a>

        </div>
    )
}

export default HomeBanner