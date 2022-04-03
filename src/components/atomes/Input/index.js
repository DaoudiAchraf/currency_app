import PropTypes from "prop-types";
import "./index.scss";

const Input = ({ value, onChange }) => (
  <input type="text" className="input" value={value} onChange={onChange} />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
