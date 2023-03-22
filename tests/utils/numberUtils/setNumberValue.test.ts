import { setNumberValue } from '@/utils/numberUtils'

describe('setNumberValue', () => {
  it(`call setNumberValue(null, 0) returns 0`, () => {
    expect(setNumberValue(null, 0)).toBe(0)
  })

  it(`call setNumberValue('', 0) returns 0`, () => {
    expect(setNumberValue('', 0)).toBe(0)
  })

  it(`call setNumberValue(1) returns 1`, () => {
    expect(setNumberValue(1)).toBe(1)
  })

  it(`call setNumberValue(0, 2) returns 0`, () => {
    expect(setNumberValue(0, 2)).toBe(0)
  })

  it(`call setNumberValue('') returns undefined`, () => {
    expect(setNumberValue('')).toBe(undefined)
  })

  it(`call setNumberValue(1.111) returns 1.111`, () => {
    expect(setNumberValue(1.111)).toBe(1.111)
  })
})
