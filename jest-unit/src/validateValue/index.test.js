const validateValue = require('./index');

describe('validateValue', () => {
  test('Корректное значения', () => {
    expect(validateValue(50)).toBe(true);
  })
  test('Меньше корректного', () => {
    expect(validateValue(-10)).toBe(false);
  })
  test('Больше корректного', () => {
    expect(validateValue(110)).toBe(false);
  })
  test('Пограничное значение снизу', () => {
    expect(validateValue(0)).toBe(true);
  })
  test('Пограничное значение сверху', () => {
    expect(validateValue(100)).toBe(true);
  })
});
