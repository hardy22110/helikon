import { isNumber } from '@/utils/numberUtils'

describe('isNumber', () => {
  it(`call isNumber('1') return true`, () => {
    expect(isNumber('1')).toBe(true)
  })

  it(`call isNumber(0) return true`, () => {
    expect(isNumber(0)).toBe(true)
  })

  it(`call isNumber(null) return false`, () => {
    expect(isNumber(null)).toBe(false)
  })

  it(`call isNumber(undefined) return false`, () => {
    expect(isNumber(undefined)).toBe(false)
  })

  it(`call isNumber('') return false`, () => {
    expect(isNumber('')).toBe(false)
  })

  it(`call isNumber([]) return false`, () => {
    expect(isNumber([])).toBe(false)
  })

  it(`call isNumber(Infinity) return false`, () => {
    expect(isNumber(Infinity)).toBe(false)
  })

  it(`call isNumber(-Infinity) return false`, () => {
    expect(isNumber(-Infinity)).toBe(false)
  })
})
