import React from 'react'

const Composition = (props) => {
  return (
<div className={props.class}>
{props.children}
</div>
  )


}


export default Composition;