import React from 'react';
import "./button.css";

const STYLES = [
    "myBtn--default--solid",
    "myBtn--chocolate--solid",
    "myBtn--transparent--solid",
    "myBtn--outline--solid"
];

const SIZES = [
    "myBtn--medium",
    "myBtn--small",
    "myBtn--xsmall",
    "myBtn--cart-small"
];

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
    }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[6];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button className={`myBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
    </button>
  );
}

export default Button