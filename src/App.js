import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/organisms/HomePage";
import HistoryPage from "./components/organisms/HistoryPage";
import "@fontsource/roboto";

import "../src/styles/theme.scss";

//  Context API
import { ConverterContextProvider } from "./context/Converter.context";

function App() { 
  return (
    <ConverterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </ConverterContextProvider>
  );
}

export default App;
