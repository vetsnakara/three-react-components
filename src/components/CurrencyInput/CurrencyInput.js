import React from "react";

import styles from "./styles.css";

const CurrencyInput = ({ currency, onChange, value }) => {
  const {
    sign = "?",
    code = "?"
  } = currency || {};

  return (
    <div className={styles["wrapper"]}>
      <span className={styles["input-addon"]}>{sign}</span>

      <input
        className={styles["input"]}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Type here ..."
        disabled={!currency}
      />

      <span className={styles["input-addon"]}>{code}</span>
    </div>
  );
};

export default CurrencyInput;
