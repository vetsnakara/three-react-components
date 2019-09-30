import React from "react";

import Page from "../../components/Page";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import CurrencyConverter from "../../components/CurrencyConverter";

import { getCurrencies } from "../../utils/api";

import logoImg from "./images/fetch-data-logo.svg";
import styles from "./styles.css";

import {
  DEFAULT_CURRENCY_FROM,
  DEFAULT_CURRENCY_TO
} from "../../constants";

class CurrencyConverterPage extends React.Component {
  state = {
    currencies: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
      error: null
    });

    getCurrencies()
      .then(currencies => {
        this.setState({
          currencies,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          error
        });
      });
  }

  render() {
    const {
      isLoading,
      error,
      currencies
    } = this.state;

    return (
      <Page>
        {{
          headerContent: [
            <div className={styles["header-logo"]}>
              <img src={logoImg} />
            </div>,
            <div className={styles["header-bottom"]}>
              <h1 className={styles["title"]}>Currency Converter</h1>
            </div>
          ],
          mainContent:
            isLoading
              ? <Loader isLoading={isLoading} />
              : (
                error
                  ? <ErrorMessage error={error} />
                  : (
                    <div className={styles["container"]}>
                      <CurrencyConverter
                        currencies={currencies}
                        codeFrom={DEFAULT_CURRENCY_FROM}
                        codeTo={DEFAULT_CURRENCY_TO}
                      />
                    </div>
                  )
              )

        }}
      </Page>
    );
  }
}

export default CurrencyConverterPage;