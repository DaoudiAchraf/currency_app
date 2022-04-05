import React, { useState, createContext } from "react";

export const ConverterContext = createContext();

export const ConverterContextProvider = ({ children }) => {
  const [currencyValue, setCurrencyValue] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [converterResult, setConverterResult] = useState(null);
  return (
    <ConverterContext.Provider
      value={{
        currencyValue,
        setCurrencyValue,
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
