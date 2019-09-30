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
import CurrencyConverterPage from "./pages/CurrencyConverterPage";

import styles from "./App.css";

const App = () => (
  <Router>
    <header>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Redirect exact from="/" to="/collapsible" />
        <Route path="/collapsible" component={CollapsiblePage} />
        <Route path="/fetch" component={FetchDataPage} />
        <Route path="/converter" component={CurrencyConverterPage} />
        <Route render={() => <p>Page Not Found</p>} />
      </Switch>
    </main>
  </Router >
);

export default App;
