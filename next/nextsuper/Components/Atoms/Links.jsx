import React from 'react'

function Links(props) {
    return (
        <>
            <a href={props.href} className={props.class}>{props.text}</a>
        </>
    )
}

export default Links