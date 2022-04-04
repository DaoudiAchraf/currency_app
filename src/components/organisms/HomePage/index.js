import React, { useContext } from "react";

import logo from "../../../icons/hatch_studio-logo.png";
import Form from "../../molecules/Form";
import Link from "../../atomes/Link";

import "./index.scss";
import { ConverterContext } from "../../../context/Converter.context";

function HomePage() {
  const { sourceCurrency, currencyValue, errorMsg, converterResult } =
    useContext(ConverterContext);

  return (
    <div className="container">
      <div className="first-background">
        <img src={logo} alt="Logo" />
        <h1>Convert currencies in real-time</h1>
      </div>

      <div className="form-layout">
        <Form />
      </div>

      <div className="second-background">
        <div className="history-container">
          <Link to="/history">View conversion history {">"}</Link>
        </div>

        {errorMsg && (
          <div className="second-background-footer">
            <h3>{errorMsg}</h3>
          </div>
        )}

        {converterResult && !errorMsg && (
          <div className="second-background-footer">
            <span>{`${currencyValue} ${sourceCurrency} =`}</span>
            <h1>{Number(converterResult).toFixed(5)}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
