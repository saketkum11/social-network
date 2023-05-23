import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { appStore } from "./frontend/app/appStore";
import { BrowserRouter } from "react-router-dom";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
