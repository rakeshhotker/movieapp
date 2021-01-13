import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import LogRocket from "logrocket";
LogRocket.init("3i2v1t/movieapp");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
