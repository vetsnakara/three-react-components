import React from "react";
import PropTypes from "prop-types";

import Collapsible from "../Collapsible/Collapsible";
import styles from "./styles.css";

const CollapsibleGroup = ({ children }) =>
  children.length > 0 && (
    <div className={styles["panel-group"]}>
      {children.map(({ title, content }) => (
        <Collapsible title={title} key={title}>
          {content}
        </Collapsible>
      ))}
    </div>
  );

Collapsible.propTypes = {};

export default CollapsibleGroup;
