import PropTypes from "prop-types";
import "./index.scss";

const Select = ({ options }) => {
  return (
    <div className="select_layout">
      <select name="cars" id="cars">
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array
};

export default Select;
