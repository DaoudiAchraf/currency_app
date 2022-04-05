import axios from "axios";
const { REACT_APP_CURRENCY_API_ENDPOINT, REACT_APP_CURRENCY_API_ACCESS_KEY } =
  process.env;

export const convert = async (amount, sourceCurrency, targetCurrency) => {
  if (![sourceCurrency, targetCurrency].includes("USD")) {

    let intermediateStep;
    const intermediateStepResponse = await axios.get(
      `http://${REACT_APP_CURRENCY_API_ENDPOINT}/live?access_key=${REACT_APP_CURRENCY_API_ACCESS_KEY}&currencies=${sourceCurrency}&source=${"USD"}&format=1`
    );
    if (intermediateStepResponse.data.success) {
      const { quotes } = intermediateStepResponse.data;
      const rate = Object.values(quotes)[0];
      intermediateStep = amount / rate;
    }

    const finalStepresponse = await axios.get(
      `http://${REACT_APP_CURRENCY_API_ENDPOINT}/live?access_key=${REACT_APP_CURRENCY_API_ACCESS_KEY}&currencies=${targetCurrency}&source=${"USD"}&format=1`
    );
    if (finalStepresponse.data.success) {
      const { quotes } = finalStepresponse.data;
      const rate = Object.values(quotes)[0];
      const result = intermediateStep * rate;
      return result.toFixed(5);
    }
    
  }

  let source = sourceCurrency;
  let target = targetCurrency;
  let operator = "*";

  if (target === "USD") {
    source = targetCurrency;
    target = sourceCurrency;
    operator = "/";
  }

  const response = await axios.get(
    `http://${REACT_APP_CURRENCY_API_ENDPOINT}/live?access_key=${REACT_APP_CURRENCY_API_ACCESS_KEY}&currencies=${target}&source=${source}&format=1`
  );

  if (response.data.success) {
    const { quotes } = response.data;
    const rate = Object.values(quotes)[0];
    const result = operator === "*" ? amount * rate : amount / rate;
    return result.toFixed(5);
  }
};
