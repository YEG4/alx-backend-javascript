export default function iterateThroughObject(reportWithIterator) {
  const result = Array.from(reportWithIterator).join(' | ');

  return result;
}
