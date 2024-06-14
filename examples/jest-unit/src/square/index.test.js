const square = require('./index');

describe('square', () => {

  // Перед каждым
  beforeEach(() => {
  })

  // Перед всеми тестами
  beforeAll(() => {
  })

  test('1 Вызов метода Math.pow', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  })

  test('Math.pow не вызывается', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  })

  // После каждого теста
  afterEach(() => {
    jest.clearAllMocks()
  })

  // После всех тестов
  afterAll(() => {
  })
})
