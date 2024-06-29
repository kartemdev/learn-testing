import { getCounterValue } from ".";

describe('getCounterValue selector', () => {
  test('wotk with empty state', () => {
    expect(getCounterValue({} as any)).toBe(0)
  })

  test('work with filled state', () => {
    expect(getCounterValue({
      counter: {
        value: 100,
      },
    })).toBe(100)
  })
})
