import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/m-plus-1/400.css";
import "@fontsource/m-plus-1/500.css";
import "@fontsource/m-plus-1/700.css";
import "@smngs/ui/tokens.css";
import "@smngs/ui/styles.css";
import "./app.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
