import React, { useState, createContext } from "react";

export const ConverterContext = createContext();

export const ConverterContextProvider = ({ children }) => {
  const [currencyValue, setCurrencyValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [converterResult, setConverterResult] = useState(null);
  return (
    <ConverterContext.Provider
      value={{
        currencyValue,
        setCurrencyValue,
        errorMsg,
        setErrorMsg,
        sourceCurrency,
        setSourceCurrency,
        targetCurrency,
        setTargetCurrency,
        converterResult,
        setConverterResult,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};
