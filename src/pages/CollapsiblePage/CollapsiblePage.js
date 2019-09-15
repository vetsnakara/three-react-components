import React from 'react'
import CollapsibleGroup from "../../components/CollapsibleGroup/CollapsibleGroup";

import logo from "./images/collapsible-logo.svg";
import styles from "./styles.css";

const CollapsiblePage = () => (
  <div>
    <header>
      <img className={styles["logo"]} src={logo} />
      <h1>Collapsible Content</h1>
    </header>
    <main className={styles["content"]}>
      <CollapsibleGroup>
        {() => ([
          {
            title: "Overview",
            content: (
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
                </p>
            )
          },
          {
            title: "Features",
            content: (
              <React.Fragment>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                  </p>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                  </p>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                  </p>
              </React.Fragment>
            )
          },
          {
            title: "Hadware",
            content: (
              <p>
                Anim pariatur cliche reprehenderit.
                </p>
            )
          },
          {
            title: "Software",
            content: (
              <p>
                Anim pariatur cliche reprehenderit.
                </p>
            )
          }
        ])}
      </CollapsibleGroup>
    </main>
  </div>
);

export default CollapsiblePage;
