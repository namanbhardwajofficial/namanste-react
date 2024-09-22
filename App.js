import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
