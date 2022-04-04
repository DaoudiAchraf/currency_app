import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = ({ title, props }) => (
  <button className="button" {...props}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
