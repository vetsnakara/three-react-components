// todo: add exchange rate
// todo: make CurrencyComponent as a local subcomponent of CurrencyConverter
// todo: add CurrencySelect subcomponent
// todo: make subcomponent CurrencyForm
// todo: make currency flag as pseudoelement bg
// todo: add fields validation
// todo: make dumb components and container components
// todo: add sass ???
// todo: add real API ???
// todo: разобраться с растягиванием белого блока при загрузке

import React, { Component } from 'react'
import Select from "../Select";
import CurrencyInput from "../CurrencyInput";

import styles from "./styles.css";

export class CurrencyCoverter extends Component {
  constructor(props) {
    super(props);

    const {
      currencies,
      codeFrom,
      codeTo
    } = this.props;

    const currencyFrom = this.getCurrencyByCode(currencies, codeFrom);
    const currencyTo = this.getCurrencyByCode(currencies, codeTo);

    this.state = {
      from: {
        currency: currencyFrom,
        value: ""
      },
      to: {
        currency: currencyTo,
        value: ""
      }
    };
  }

  handleSelectCurrency = (target, code) => {
    const other = target === "from"
      ? "to"
      : "from";

    // check if currences are the same
    const isSameCurrency = this.state[other].currency.code === code;
    if (isSameCurrency) return;

    // state updates
    const stateUpdates = {
      from: {
        ...this.state.from,
      },
      to: {
        ...this.state.to
      }
    };

    // update currency
    const newCurrency = this.getCurrencyByCode(this.props.currencies, code);
    stateUpdates[target].currency = newCurrency;

    // update "to" value
    const { sellRate: rateFrom } = stateUpdates.from.currency;
    const { sellRate: rateTo } = stateUpdates.to.currency;
    stateUpdates.to.value = stateUpdates.from.value * rateFrom / rateTo;

    // update state
    this.setState(stateUpdates);
  };

  handleSwitchCurrencies = () => {
    this.setState(({ from, to }) => ({
      to: { ...from },
      from: { ...to }
    }));
  };

  handleChangeCurrencyValue = (target, value) => {
    const { currency: currencyFrom } = this.state.from;
    const { currency: currencyTo } = this.state.to;

    const { sellRate: rateFrom } = currencyFrom;
    const { sellRate: rateTo } = currencyTo;

    const other = target === "from"
      ? "to"
      : "from";

    const newValue = other === "from"
      ? value * rateTo / rateFrom
      : value * rateFrom / rateTo;

    this.setState({
      [target]: {
        ...this.state[target],
        value
      },
      [other]: {
        ...this.state[other],
        value: newValue
      }
    });
  }

  getCurrencyByCode = (currencies, code) =>
    code ? currencies.find(c => c.code === code) : null;

  render() {
    const {
      from,
      to
    } = this.state;

    const { currencies } = this.props;

    return (
      <div className={styles["wrapper"]}>
        <div className={styles["col"]}>
          {/* Currency Form */}
          <h3 className={styles["form__title"]}>From</h3>
          <div className={styles["select-block"]}>
            <img
              className={styles["flag-img"]}
              src={`./images/flags/${from.currency.code.toLowerCase()}.png`}
              width={43}
              height={29}
              alt={from.currency.code}
            />
            <Select
              className={styles["select"]}
              items={currencies}
              onSelect={code => this.handleSelectCurrency("from", code)}
              selected={from.currency}
              fieldsMap={{
                key: "code",
                value: "code",
                content: "name"
              }}
            />
          </div>
          <CurrencyInput
            currency={from.currency}
            onChange={code => this.handleChangeCurrencyValue("from", code)}
            value={from.value}
          />
        </div>

        <button
          onClick={this.handleSwitchCurrencies}
          className={styles["switch-btn"]}
        >
          =
        </button>

        <div className={styles["col"]}>
          <h3 className={styles["form__title"]}>To</h3>
          <div className={styles["select-block"]}>
            <img
              className={styles["flag-img"]}
              src={`./images/flags/${to.currency.code.toLowerCase()}.png`}
              width={43}
              height={29}
              alt={to.currency.code}
            />
            <Select
              className={styles["select"]}
              items={currencies}
              onSelect={value => this.handleSelectCurrency("to", value)}
              selected={to.currency}
              fieldsMap={{
                key: "code",
                value: "code",
                content: "name"
              }}
            />
          </div>
          <CurrencyInput
            currency={to.currency}
            onChange={code => this.handleChangeCurrencyValue("to", code)}
            value={to.value}
          />
        </div>
      </div>
    )
  }
}

export default CurrencyCoverter
