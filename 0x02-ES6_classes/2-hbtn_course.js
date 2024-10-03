export default class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._name = name;
    /* eslint-disable-next-line no-underscore-dangle */
    this._length = length;
    /* eslint-disable-next-line no-underscore-dangle */
    this._students = students;
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students; // eslint-disable-line no-underscore-dangle
  }
}
