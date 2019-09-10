import React from "react";
import CollapsibleGroup from "./components/CollapsibleGroup";

const App = () => (
  <div className="container">
    <header>
      <h1>Collapsible Content</h1>
      <img src="/images/expand-vertical-4.svg" />
    </header>
    <div className="content">
      <CollapsibleGroup />
    </div>
  </div>
);

export default App;
