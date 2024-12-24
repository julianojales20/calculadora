import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Calculador from "./main/Calculador";

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculador />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
