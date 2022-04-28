import React from "react";
import BtnArrow from "../images/BtbArrow.png";

const Button = (props) => {
  return (
    <button className={`button ${props.additionalClass}`}>
      <span>{props.title}</span>
      <img src={BtnArrow} alt="Strzałka w prawo" />
    </button>
  );
};

export default Button;
