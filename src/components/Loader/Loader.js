import React from 'react'

import styles from "./styles.css";
import loader from "./images/ico_loader.svg";

const Loader = ({ isLoading }) => isLoading && (
  <div className={styles["loader"]}>
    <img className={styles["icon"]} src={loader} />
  </div>
);

export default Loader;
