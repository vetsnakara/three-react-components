import React from 'react'
import { NavLink } from "react-router-dom";

import styles from "./styles.css";

const Navigation = () => (
  <nav className={styles["nav"]}>
    <NavLink className={styles["nav-link"]} activeClassName={styles["active"]} to="/collapsible">Collapsible</NavLink>
    <NavLink className={styles["nav-link"]} activeClassName={styles["active"]} to="/fetch">Fetch Data</NavLink>
    <NavLink className={styles["nav-link"]} activeClassName={styles["active"]} to="/converter">Currency Converter</NavLink>
  </nav>
);

export default Navigation
