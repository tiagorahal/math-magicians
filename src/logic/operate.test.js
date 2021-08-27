import operate from './operate';

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

  test('divide two numbers and get the remainder', () => {
    expect(Number(operate(2, 3, '%'))).toEqual(2);
  });

  test('give an error if given a wrong operator', () => {
    try { operate(2, 3, '*'); } catch (err) { expect(`${err}`).toBe("Error: Unknown operation '*'"); }
  });

  test('give an error if given a wrong number', () => {
    try { operate(2, 'd', 'x'); } catch (err) { expect(`${err}`).toBe('Error: [big.js] Invalid number'); }
  });
});
