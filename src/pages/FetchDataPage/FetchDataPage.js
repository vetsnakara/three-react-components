import React from "react";
import CollapsibleGroup from "../../components/CollapsibleGroup";
import { getUsers } from "../../utils/api";

import logo from "./images/fetch-data-logo.svg";
import styles from "./styles.css";

// todo: make a single fetch component from this (not page)

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
      isLoading: true
    });

    getUsers()
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });

        // save data in LS
        localStorage.setItem(
          "appData",
          JSON.stringify({
            users,
            expires: Date.now() + 1000 * 60
          })
        );
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  };

  render() {
    const { isLoading, users, error } = this.state;

    if (error) {
      console.log(`${error}`);
      return <p>Error occurs ...</p>;
    }

    if (isLoading) return <p>Loading ...</p>;

    return (
      <div>
        <header>
          <img className={styles["logo"]} src={logo} />
          <h1>Fetching Data</h1>
        </header>
        <main className={styles["content"]}>
          <button
            onClick={this.fetchData}
          >
            FETCH
        </button>
          <CollapsibleGroup>
            {() => users.map(user => ({
              title: user.name,
              content: (
                <div key={user.id}>
                  <div>Username: {user.username}</div>
                  <div>Email: {user.email}</div>
                </div>
              )
            }))}
          </CollapsibleGroup>
        </main>
      </div>
    );
  }
}

export default FetchDataPage;