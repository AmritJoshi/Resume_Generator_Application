import React from 'react'
import '../UtilCss/ContactInput.css';

function ContactInput(props) {
  return (
    <div className='InputBox'>
        <input type='text' required="required"/>
        <span>{props.text}</span>
    </div>
  )
}

export default ContactInput