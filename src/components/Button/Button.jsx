import React from "react";
import PropTypes from "prop-types";


const Button = (props) => {
    let { clickEvent } = props; 
  return (
    <button className="Button" onClick={clickEvent}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;