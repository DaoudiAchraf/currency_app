import React, { useContext, useState } from "react";
import { ConverterContext } from "../../../context/Converter.context";
import { convert } from "../../../utils/helpers";
import logo from "../../../icons/hatch_studio-logo.png";
import Form from "../../molecules/Form";
import Link from "../../atomes/Link";

import "./index.scss";

function HomePage() {
  const {
    sourceCurrency,
    currencyValue,
    targetCurrency,
    converterResult,
    setConverterResult,
  } = useContext(ConverterContext);

  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!currencyValue.length) {
      setErrorMsg("Please, enter a valid amount number");
      return;
    }
    if (errorMsg) setErrorMsg(null);

    const result = await convert(currencyValue, sourceCurrency, targetCurrency);
    setConverterResult(result);

    /*  store result on local storage */
    const retrievedHistory = localStorage.getItem("history");

    let history = [];
    if (retrievedHistory) {
      history = JSON.parse(retrievedHistory);
    }
    history.push({
      date: new Date(),
      from: `${currencyValue} ${sourceCurrency}`,
      to: `${result} ${targetCurrency}`,
    });
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <div className="container" data-testid="homePage">
      <div className="first-background">
        <img src={logo} alt="Logo" />
        <h2>Convert currencies in real-time</h2>
      </div>

      <div className="form-layout">
        <Form onSubmit={onSubmit} />
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
            <h2>{`${converterResult} ${targetCurrency}`}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
