import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate  from 'react-alert-template-basic'

import { Provider } from "react-redux";
import store from "./store";

const options = {
  timeout: 5000,
  positions: positions.TOP_LEFT,
  transitions: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <App />
  </BrowserRouter>
    </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
