import isFunction from '@/utils/isFunction'

describe('isFunction', () => {
  test('returns true if input is a function', () => {
    expect(
      isFunction(() => {
        //
      })
    ).toBe(true)
    expect(
      isFunction(function () {
        //
      })
    ).toBe(true)
    expect(
      isFunction(async function () {
        //
      })
    ).toBe(true)
    expect(
      isFunction(function* () {
        //
      })
    ).toBe(true)
    // eslint-disable-next-line no-new-func
    expect(isFunction(new Function())).toBe(true)
  })

  test('returns false if input is not a function', () => {
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(42)).toBe(false)
    expect(isFunction('foo')).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction(NaN)).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction(Infinity)).toBe(false)
  })
})
