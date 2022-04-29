import React from "react";

const Button = (props) => {
  return (
    <button className={`button ${props.additionalClass}`}>
      <span>{props.title}</span>
      <div className="buttonArrow"></div>
    </button>
  );
};

export default Button;
