import React from 'react'

import styles from "./styles.css";

const Page = ({ children }) => {
  const { headerContent, mainContent } = children;
  return (
    <article>
      <header className={styles["header"]}>
        {headerContent}
      </header>
      <main>
        {mainContent}
      </main>
    </article>
  )
};

export default Page;
