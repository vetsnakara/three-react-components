import React from "react";
import CollapsibleGroup from "../../components/CollapsibleGroup/CollapsibleGroup";
import Page from "../../components/Page";

import logo from "./images/collapsible-logo.svg";

import styles from "./styles.css";

const CollapsiblePage = () => (
  <Page>
    {{
      headerContent: [
        <div className={styles["header-logo"]} key="logo">
          <img src={logo} />,
        </div>,
        <div className={styles["header-bottom"]} key="header-bottom">
          <h1 className={styles["title"]}>Collapsible Content</h1>
        </div>
      ],
      mainContent: (
        <div className={styles["container"]}>
          <CollapsibleGroup>
            {[
              {
                title: "Overview",
                content: (
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquid officiis esse amet cumque et. Nihil fugit recusandae
                    alias excepturi et, optio eligendi beatae inventore magnam
                    atque quo dolore nam neque!
                  </p>
                )
              },
              {
                title: "Features",
                content: (
                  <React.Fragment>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute. Anim pariatur cliche reprehenderit, enim eiusmod
                      high life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute.
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute. Anim pariatur cliche reprehenderit, enim eiusmod
                      high life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute.
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute. Anim pariatur cliche reprehenderit, enim eiusmod
                      high life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute.
                    </p>
                  </React.Fragment>
                )
              },
              {
                title: "Hadware",
                content: <p>Anim pariatur cliche reprehenderit.</p>
              },
              {
                title: "Software",
                content: <p>Anim pariatur cliche reprehenderit.</p>
              }
            ]}
          </CollapsibleGroup>
        </div>
      )
    }}
  </Page>
);

export default CollapsiblePage;
