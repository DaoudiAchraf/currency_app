import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Select = ({ options, value, onChange }) => {
  return (
    <div className="select_layout">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
