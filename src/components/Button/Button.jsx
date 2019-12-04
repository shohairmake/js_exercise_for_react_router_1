import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const Button = (props) => {
    let { clickEvent } = props; 
  return (
    <div className="Button" onClick={clickEvent}>
      {props.children}
    </div>
  );
}

Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;