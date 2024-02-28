import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from "react-router-dom";

import "./scss/index.scss";

const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <HashRouter>
    <App />
  </HashRouter>
);
