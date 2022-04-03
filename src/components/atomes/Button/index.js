import PropTypes from "prop-types";
import "./index.scss";

const Button = ({ title }) => <div className="button">{title}</div>;

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
