import PropTypes from "prop-types";
import "./index.scss";

const Label = ({ title }) => <label className="label">{title}</label>;

Label.propTypes = {
  title: PropTypes.string,
};

export default Label;
