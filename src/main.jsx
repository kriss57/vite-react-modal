import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )
