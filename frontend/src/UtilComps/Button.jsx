import React from "react";
import "../UtilCss/Button.css";

const Button = (props) => {
//   const styles = [
//     "--primary",
//     "--gray",
//     "--red",
//     "--violet",
//     "--indigo",
//     "--blue",
//     "--cyan",
//     "--teal",
//     "--green",
//     "--orange",
//   ];
//   const size = ["button--small", "button--medium", "button--large"];
  return (
    <input
      type="button"
      value={props.value}
      className={`button ${props.size} ${props.color}`}
    ></input>
  );
};

export default Button;
