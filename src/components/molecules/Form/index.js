import React, { useContext } from "react";
import { ConverterContext } from "../../../context/Converter.context";
import Button from "../../atomes/Button";
import Input from "../../atomes/Input";
import switcherIcon from "../../../icons/switcher.png";
import Select from "../../atomes/Select";
import Label from "../../atomes/Label";
import axios from "axios";

import "./index.scss";

function Form() {
  const {
    currencyValue,
    setCurrencyValue,
    sourceCurrency,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    errorMsg,
    setErrorMsg,
    converterResult,
    setConverterResult,
  } = useContext(ConverterContext);

  const { REACT_APP_CURRENCY_API_ENDPOINT, REACT_APP_CURRENCY_API_ACCESS_KEY } =
    process.env;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!currencyValue.length) {
      setErrorMsg("Please, enter a valid amount number");
      return;
    }
    if (errorMsg) setErrorMsg(null);

    axios
      .get(
        `http://${REACT_APP_CURRENCY_API_ENDPOINT}/live?access_key=${REACT_APP_CURRENCY_API_ACCESS_KEY}&currencies=${targetCurrency}&source=${sourceCurrency}&format=1`
      )
      .then((response) => {
        if (response.data.success) {
          const { quotes } = response.data;
          const unit = Object.values(quotes)[0];
          const result = Number(unit * currencyValue).toFixed(5);
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
        }
      });
  };

  const selectOptions = ["USD", "EUR", "CHF"];

  const onSourceCurrencyChange = (value) => {
    if (converterResult) setConverterResult(null);
    setSourceCurrency(value);
  };

  const onTargetCurrencyChange = (value) => {
    if (converterResult) setConverterResult(null);
    setTargetCurrency(value);
  };

  return (
    <form className="layout" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="layout_form-fields">
          <div className="layout_inner-form">
            <Label title="Amount" />
            <Label title="From" />
            <div>&nbsp;</div>
            <Label title="To" />
            <div>&nbsp;</div>
            <Input
              value={currencyValue}
              onChange={setCurrencyValue}
              onFocus={() => setConverterResult(null)}
            />
            <Select
              options={selectOptions}
              value={sourceCurrency}
              onChange={onSourceCurrencyChange}
            />
            <img src={switcherIcon} alt="Logo" />
            <Select
              options={selectOptions}
              value={targetCurrency}
              onChange={onTargetCurrencyChange}
            />
            <div className="layout_submit-form">
              <Button title="convert" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
