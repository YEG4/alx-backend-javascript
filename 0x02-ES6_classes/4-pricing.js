export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    /* eslint-disable-next-line no-underscore-dangle */
    return this._amount;
  }

  set amount(value) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._amount = value;
  }

  get currency() {
    /* eslint-disable-next-line no-underscore-dangle */
    return this._currency;
  }

  set currency(value) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._currency = value;
  }

  displayFullPrice() {
    /* eslint-disable-next-line no-underscore-dangle */
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
