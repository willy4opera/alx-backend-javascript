export default function divideFunction(numerator, denominator) {
  if (denominator === 0) { // check if denominator is num type and is zero
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
