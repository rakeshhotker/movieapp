import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import movies from "./reducers";
//import LogRocket from "logrocket";
//LogRocket.init("3i2v1t/movieapp");

const store = createStore(movies);
console.log("store", store);
console.log("getState", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
