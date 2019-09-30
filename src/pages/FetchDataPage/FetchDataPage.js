import React from "react";

import CollapsibleGroup from "../../components/CollapsibleGroup";
import Page from "../../components/Page";
import Loader from "../../components/Loader";
import UserInfo from "../../components/UserInfo";
import ErrorMessage from "../../components/ErrorMessage";
import { getUsers } from "../../utils/api";

import logoImg from "./images/fetch-data-logo.svg";
import styles from "./styles.css";

class FetchDataPage extends React.Component {
  state = {
    isLoading: false,
    error: null,
    users: []
  };

  componentDidMount() {
    let appData = localStorage.getItem("appData");
    appData = appData ? JSON.parse(appData) : {};

    const { expires, users } = appData;

    if (expires && expires >= Date.now()) {
      console.log(
        `Use local storage. Expires through ${(expires - Date.now()) /
        1000} seconds.`
      );
      return this.setState({ users });
    }

    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      isLoading: true,
      error: null,
      users: []
    });

    getUsers()
      .then(users => {
        this.setState({
          users,
          error: null,
          isLoading: false
        });

        localStorage.setItem(
          "appData",
          JSON.stringify({
            users,
            expires: Date.now() + 1000 * 60
          })
        );
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  };

  render() {
    const { isLoading, users, error } = this.state;

    return (
      <Page>
        {{
          headerContent: [
            <div className={styles["header-logo"]}>
              <img src={logoImg} />
            </div>,
            <div className={styles["header-bottom"]}>
              <h1 className={styles["title"]}>Fetching Data</h1>
              <button
                className={styles["fetch-button"]}
                onClick={this.fetchData}
                disabled={isLoading}
              >
                FETCH
              </button>
            </div>
          ],
          mainContent: [
            <Loader isLoading={isLoading} />,
            error
              ? <ErrorMessage error={error} />
              : (
                <div className={styles["container"]}>
                  <CollapsibleGroup>
                    {users.map(user => ({
                      title: user.name,
                      content: <UserInfo key={user.id} user={user} />
                    }))}
                  </CollapsibleGroup>
                </div>
              )
          ]
        }}
      </Page>
    );
  }
}

export default FetchDataPage;