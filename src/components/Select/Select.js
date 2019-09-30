import React from "react";

import styles from "./styles.css";

const Select = ({
  items,
  onSelect,
  selected,
  fieldsMap = {
    key,
    value,
    content
  },
  className
}) => {
  const { key, value, content } = fieldsMap;

  return (
    <select
      onChange={e => onSelect(e.target.value)}
      value={selected[value]}
      className={className}
    >
      {
        items.map(item => {
          return (
            <option
              key={item[key]}
              value={item[value]}
            >
              {item[content]}
            </option>
          );
        })
      }
    </select>
  );
};

export default Select;
