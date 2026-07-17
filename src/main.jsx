import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TravelProvider } from "./context/TravelContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TravelProvider>
    <App />
  </TravelProvider>
);