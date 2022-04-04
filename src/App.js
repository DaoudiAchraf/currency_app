import React from 'react';
import Router from './router';
import "@fontsource/roboto";
//  Context API
import { ConverterContextProvider } from "./context/Converter.context";

import "../src/styles/theme.scss";

function App() { 
  return (
    <ConverterContextProvider>
        <Router />
    </ConverterContextProvider>
  );
}

export default App;
