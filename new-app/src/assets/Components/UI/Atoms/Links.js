import React from 'react'

const Links = (props) => {
return (
  <>
<a href={props.href} className={props.class}>{props.text}</a>
</>
)

}

export default Links