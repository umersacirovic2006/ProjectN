import React from "react";
import './Button.css'

const Button = ({text, bgColor, txtColor, width}) => {
    return (
        <div className="button-wrapper">
            <button style={{backgroundColor: bgColor, color: txtColor, width: width}}>{text}</button>
        </div>
    )
}

export default Button