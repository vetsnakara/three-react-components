import React from 'react'
import { FaHouseDamage, FaUserAlt, FaEnvelope } from "react-icons/fa";

import styles from "./styles.css";

const UserInfo = ({ user }) => {
  const iconProps = {
    className: styles["icon"],
    color: "#2196f3"
  };

  return (
    <ul className={styles["info-list"]}>
      <li className={styles["info-item"]}>
        <FaUserAlt {...iconProps} /> Username: {user.username}
      </li>
      <li className={styles["info-item"]}>
        <FaEnvelope {...iconProps} /> Email: {user.email}
      </li>
      <li className={styles["info-item"]}>
        <FaHouseDamage {...iconProps} /> Location: {user.location}
      </li>
    </ul>
  );
};

export default UserInfo
