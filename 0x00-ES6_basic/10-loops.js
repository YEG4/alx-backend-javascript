export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, val] of array.entries()) {
    let value = val;
    array[idx] = appendString + value;
  }

  return array;
}
