import React from 'react';

const Paragraph = (props) => {
return (
  <>
<p className={props.class} onClick={props.onClick}>{props.text}</p>
</>

)
}

export default Paragraph;