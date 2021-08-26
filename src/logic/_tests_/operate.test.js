import operate from '../operate';

describe('test the operate module', () => {
  test('adds two numbers', () => {
    expect(Number(operate(2, 3, '+'))).toEqual(5);
  });

  test('removes one number from an other', () => {
    expect(Number(operate(2, 3, '-'))).toEqual(-1);
  });

  test('multiplies two numbers', () => {
    expect(Number(operate(2, 3, 'x'))).toEqual(6);
  });

  test('divides two numbers', () => {
    expect(Number(operate(2, 3, '÷'))).toBeCloseTo(0.666666);
  });

  test('division with 0', () => {
    expect(operate(2, 0, '÷')).toEqual('0');
  });

  test('adds two numbers', () => {
    expect(Number(operate(2, 3, '%'))).toEqual(2);
  });
});
