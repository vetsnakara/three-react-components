import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navigation from "./components/Navigation";

// pages
import CollapsiblePage from "./pages/CollapsiblePage/index";
import FetchDataPage from "./pages/FetchDataPage/index";

import styles from "./App.css";

const App = () => (
  <Router>
    <div className={styles["container"]}>
      <header>
        <Navigation />
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
