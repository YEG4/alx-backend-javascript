export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    const value = val;
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }

  return array;
}
