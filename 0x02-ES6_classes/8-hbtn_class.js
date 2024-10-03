export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this.location;
      /* eslint-disable-next-line  no-else-return */
    } else if (type === 'number') {
      return this.size;
    }
    return this.value;
  }
}
