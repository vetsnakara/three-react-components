import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

// pages
import CollapsiblePage from "./pages/CollapsiblePage/index";
import FetchDataPage from "./pages/FetchDataPage/index";

import styles from "./App.css";

const App = () => (
  <Router>
    <div className={styles["container"]}>
      <header>
        {/* extract to Nav component */}
        <nav>
          <NavLink to="/collapsible">Collapsible</NavLink>
          <NavLink to="/fetch">Fetch Data</NavLink>
          <NavLink to="/converter">Currency Converter</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/collapsible" component={CollapsiblePage} />
          <Route path="/fetch" component={FetchDataPage} />
          <Route render={() => <Redirect to="/collapsible" />} />
        </Switch>
      </main>
    </div>
  </Router >
);

export default App;
