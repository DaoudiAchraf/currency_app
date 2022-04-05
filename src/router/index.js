import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/organisms/HomePage";
import HistoryPage from "../components/organisms/HistoryPage";
import { ConverterContextProvider } from "../context/Converter.context";

function Router() {
  return (
    <ConverterContextProvider>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </ConverterContextProvider>
  );
}

export default Router;
