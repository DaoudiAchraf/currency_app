import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Input = ({ value, onChange, ...props }) => (
  <input
    type="number"
    className="input"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    {...props}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
