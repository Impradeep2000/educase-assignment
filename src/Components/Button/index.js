import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Button({ ButtonText, navigateTo,type}) {

  return (
    <Link to={navigateTo}>
      <button className="btn" type={type} >{ButtonText}</button>
    </Link>
  );
}
export default Button;
