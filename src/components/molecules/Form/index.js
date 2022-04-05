import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ConverterContext } from "../../../context/Converter.context";
import Button from "../../atomes/Button";
import Input from "../../atomes/Input";
import switcherIcon from "../../../icons/switcher.png";
import Select from "../../atomes/Select";
import Label from "../../atomes/Label";

import "./index.scss";

function Form({ onSubmit }) {
  const {
    currencyValue,
    setCurrencyValue,
    sourceCurrency,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    converterResult,
    setConverterResult,
  } = useContext(ConverterContext);

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
    <form data-testid="form" className="layout" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="layout_form-fields">
          <div className="layout_inner-form">
            <Label title="Amount" />
            <Label title="From" />
            <div>&nbsp;</div>
            <Label title="To" />
            <div>&nbsp;</div>
            <Input
              type="number"
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
              options={selectOptions.filter(
                (option) => option !== sourceCurrency
              )}
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
