export default function divideFunction(numerator, denominator) {
  try {
    const result = numerator / denominator;
    return result;
  } catch (e) {
    throw Error('cannot divide by 0');
  }
}
