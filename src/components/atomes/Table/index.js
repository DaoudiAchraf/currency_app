import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";

import "./index.scss";

const Table = ({ dataSource }) => {
  return (
    <table className="table" cellSpacing={0} cellPadding={0}>
      <tr>
        <th>Date</th>
        <th>From</th>
        <th>To</th>
      </tr>
      {dataSource.map(({ date, from, to }, index) => (
        <tr key={index}>
          <td>{format(new Date(date), "MMM dd,yyyy")}</td>
          <td>{from}</td>
          <td>{to}</td>
        </tr>
      ))}
    </table>
  );
};

Table.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
};

export default Table;
