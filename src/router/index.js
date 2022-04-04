import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/organisms/HomePage";
import HistoryPage from "./components/organisms/HistoryPage";
 
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
