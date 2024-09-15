import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");
const reactElement = React.createElement("h1", {}, "Hello World from React");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(reactElement);
