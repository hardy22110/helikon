import setNumberValue from '@/utils/setNumberValue'

describe('setNumberValue', () => {
  it(`call setNumberValue(null, 0) returns 0`, () => {
    expect(setNumberValue(null, 0)).toBe(0)
  })

  it(`call setNumberValue('', 0) returns 0`, () => {
    expect(setNumberValue('', 0)).toBe(0)
  })

  it(`call setNumberValue(1) returns 1`, () => {
    expect(setNumberValue(1, undefined)).toBe(1)
  })

  it(`call setNumberValue(0, 2) returns 0`, () => {
    expect(setNumberValue(0, 2)).toBe(0)
  })

  it(`call setNumberValue('') returns undefined`, () => {
    expect(setNumberValue('', undefined)).toBe(undefined)
  })

  it(`call setNumberValue(1.111) returns 1.111`, () => {
    expect(setNumberValue(1.111, undefined)).toBe(1.111)
  })
})
