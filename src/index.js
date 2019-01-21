import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import HomePage from "./HomePage";

function App() {
  return <HomePage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
