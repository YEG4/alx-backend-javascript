import Building from './5-building';

export default class SkyHighBuilding extends Building() {
  constructor(sqft, floors) {
    super(sqft);
    this.sqft = sqft;
    this.floors = floors;
  }

  get sqft() {
    /* eslint-disable-next-line no-underscore-dangle */
    return this._sqft;
  }

  set sqft(value) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._sqft = value;
  }

  get floors() {
    /* eslint-disable-next-line no-underscore-dangle */
    return this._floors;
  }

  set floors(value) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._floors = value;
  }

  evacuationWarningMessage() {
    /* eslint-disable-next-line no-underscore-dangle */
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
