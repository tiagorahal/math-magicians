import calculate from './calculate';

describe('calculate', () => {
  test('it should return a null object when AC button is used', () => {
    const obj = {};
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('it returns a null when object is null and zero is entered', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toEqual({});
  });
  test('it returns a negative number', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '+/-')).toEqual({ next: '-5' });
  });

  test('it concatenates the number with the next value', () => {
    expect(calculate({ total: null, next: '5', operation: '+' }, '3')).toEqual({ total: null, operation: '+', next: '53' });
  });

  test('it concatenates the number with the next value', () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '3')).toEqual({ total: null, operation: '+', next: '3' });
  });

  test('it updates the next when there is not operation', () => {
    expect(calculate({ total: null, next: '6', operation: null }, '3')).toEqual({ total: null, next: '63' });
  });

  test('it updates the next with buttonName when there is no operation and no next', () => {
    expect(calculate({ total: null, next: '6' }, '3')).toEqual({ total: null, next: '63' });
  });

  test("when press '.' it mantains the obj if next contains '.'", () => {
    expect(calculate({ total: null, next: '6.5' }, '.')).toEqual({ total: null, next: '6.5' });
  });

  test("when press '.' it adds the '.' if next doesn't contains '.'", () => {
    expect(calculate({ total: null, next: '6' }, '.')).toEqual({ total: null, next: '6.' });
  });

  test("when press '.' it adds the '0.' if next doesn't exists", () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '.')).toEqual({ next: '0.' });
  });

  test("when press '.' it returns {} if total contains '.'", () => {
    expect(calculate({ total: '6.5', next: null }, '.')).toEqual({});
  });

  test("when press '.' it adds the '.' if total doesn't contains '.'", () => {
    expect(calculate({ total: '6', next: null }, '.')).toEqual({ total: '6.' });
  });

  test("when press '.' it adds the '0.' if total doesn't exists", () => {
    expect(calculate({ total: null, next: null }, '.')).toEqual({ total: '0.' });
  });

  test('it retrns Zero when divide between zero', () => {
    expect(calculate({ total: '3', next: '0', operation: '÷' }, '=')).toEqual({ next: null, operation: null, total: '0' });
  });

  test('it retrns remainder of a division', () => {
    expect(calculate({ total: '3', next: '2', operation: '%' }, '=')).toEqual({ next: null, operation: null, total: '1' });
  });
});
