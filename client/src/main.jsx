import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/400-italic.css"; // Specify weight and style

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
