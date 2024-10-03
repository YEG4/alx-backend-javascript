export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this.sqft = sqft;
  }

  get sqft() {
    /* eslint-disable-next-line no-underscore-dangle */
    return this._sqft;
  }

  set sqft(value) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._sqft = value;
  }
}
