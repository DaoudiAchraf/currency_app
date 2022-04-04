import React, { useEffect, useState } from "react";
import logo from "../../../icons/hatch_studio-logo.png";
import Link from "../../atomes/Link";
import Table from "../../atomes/Table";
import "./index.scss";

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history));
    }
  }, []);

  return (
    <div className="history-page_layout">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className="link-wrapper">
        <Link to="/">{"<"} Go back</Link>
      </div>

      {history.length ? 
        <Table dataSource={history} /> 
        : <h2>No Data</h2>
      }
    </div>
  );
}

export default HistoryPage;
