import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CodeReview from "./codeReview.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />            
        <Route path="/code-review" element={<CodeReview />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
