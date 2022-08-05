import React from 'react';
import './BasicButton.css'

function BasicButton({className, text, onClick}) {
  return (
    <button className={"basic-button basic-tool " + className} onClick={onClick}>
        {text}
    </button>
  )
}

export default BasicButton;