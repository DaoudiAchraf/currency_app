import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/organisms/HomePage";
import HistoryPage from "./components/organisms/HistoryPage";

import "../src/styles/theme.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
