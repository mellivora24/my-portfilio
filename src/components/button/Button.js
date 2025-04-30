import React from 'react';
import './Button.css';

const Button = ({ text = "NEXT", href = "#" }) => {
  return (
    <div className="custom-button-wrapper">
      <a className="custom-button" href={href}>
        <span className="custom-button-text">{text}</span>
        {/* <span className="custom-button-arrow">➤</span> */}
      </a>
    </div>
  );
};

export default Button;
