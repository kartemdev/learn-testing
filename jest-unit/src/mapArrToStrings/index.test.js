const mapArrToStrings = require('./index');

describe('mapArrToStrings', () => {
  test('Корректное значения', () => {
    expect(mapArrToStrings([1, 2, 3])).toStrictEqual(['1', '2', '3']);
  })
  test('Случайные тип данных', () => {
    expect(mapArrToStrings([1, 2, 3, null, 'not_number', undefined])).toStrictEqual(['1', '2', '3']);
  })
  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toStrictEqual([]);
  })
  test('Противоположное корректное значения', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toStrictEqual([1, 3, 4, 5]);
  })
});
