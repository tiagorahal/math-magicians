import Big from 'big.js';// eslint-disable-line

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '×') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    if (numberTwo === '0') {
      return 'can\'t divide by zero';
    }
    return one.div(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}