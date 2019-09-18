import React from 'react';
import errorImg from "./images/error.svg";

import styles from "./styles.css";

const ErrorMessage = ({ error }) => {
  console.error(error);

  return (
    <div className={styles["wrapper"]}>
      <img className={styles["error-icon"]} src={errorImg} />
      <div className={styles["error-message"]}>Something went wrong ...</div>
    </div>
  )
};

export default ErrorMessage;
