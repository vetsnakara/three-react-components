import React from "react";
import CollapsibleGroup from "./components/CollapsibleGroup";
import logo from "./images/expand-vertical-4.svg";

const App = () => (
  <div className="container">
    <header>
      <img src={logo} />
      <h1>Collapsible Content</h1>
    </header>
    <div className="content">
      <CollapsibleGroup />
    </div>
  </div>
);

export default App;
