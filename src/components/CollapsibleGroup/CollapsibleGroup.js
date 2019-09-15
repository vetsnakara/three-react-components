import React from 'react';
import PropTypes from 'prop-types';

import Collapsible from "../Collapsible";
import styles from "./styles.css";

// todo: make accordion behaviour

const CollapsibleGroup = ({ children }) => (
  <div className={styles["panel-group"]}>
    {children().map(({ title, content }) => (
      <Collapsible title={title} key={title}>
        {content}
      </Collapsible>
    ))}
  </div>
);

Collapsible.propTypes = {};

export default CollapsibleGroup
