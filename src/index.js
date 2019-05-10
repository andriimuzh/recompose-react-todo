import React from "react";
import ReactDOM from "react-dom";
import EnhancedApp from "./EnhancedApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <EnhancedApp />
  </BrowserRouter>,
  document.getElementById("root"),
);
