import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.scss";

const LinkComponent = ({ to, children }) => (
  <Link className="default-link" to={to}>
    {children}
  </Link>
);

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default LinkComponent;
