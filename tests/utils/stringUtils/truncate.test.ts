import { truncate } from '@/utils/stringUtils'

describe('truncate', () => {
  it('returns empty string when input is an empty string', () => {
    expect(truncate('', 10)).toEqual('')
  })
  it('returns original input when input is not a string', () => {
    expect(truncate(123, 10)).toEqual(123)
    expect(truncate(true, 10)).toEqual(true)
    expect(truncate(null, 10)).toEqual(null)
    expect(truncate(undefined, 10)).toEqual(undefined)
  })
  it('returns original input when input length is shorter than maxLength', () => {
    expect(truncate('hello', 10)).toEqual('hello')
    expect(truncate('你好', 3)).toEqual('你好')
  })
  it('returns truncated string when input length is longer than maxLength', () => {
    expect(truncate('hello world', 5)).toEqual('hello')
    expect(truncate('你好世界', 2)).toEqual('你好')
  })
  it('returns original input when input length is equal to maxLength', () => {
    expect(truncate('hello', 5)).toEqual('hello')
    expect(truncate('你好', 2)).toEqual('你好')
  })
})
