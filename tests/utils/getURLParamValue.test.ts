import getURLParamValue from '@/utils/getURLParamValue'

describe('getURLParamValue', () => {
  it('getURLParamValue returns correct value for alphanumeric parameter', () => {
    const url = 'https://example.com/?param1=value1&param2=value2'
    const key = 'param1'
    const result = getURLParamValue(url, key)
    expect(result).toBe('value1')
  })

  it('getURLParamValue returns correct value for parameter with reserved characters', () => {
    const url =
      'https://example.com/?reserved=%2F%3F%3A%40%26%3D%2B%24%2C%3B%23%5B%5D%22%3C%3E%7B%7D%7C%5C%5E%60%20'
    const key = 'reserved'
    const result = getURLParamValue(url, key)
    expect(result).toBe('/?:@&=+$,;#[]"<>{}|\\^` ')
  })

  it('getURLParamValue returns correct value for parameter with Chinese and Unicode characters', () => {
    const url = 'https://example.com/?中文=测试&unicode=%E6%B5%8B%E8%AF%95'
    const key1 = '中文'
    const key2 = 'unicode'
    const result1 = getURLParamValue(url, key1)
    const result2 = getURLParamValue(url, key2)
    expect(result1).toBe('测试')
    expect(result2).toBe('测试')
  })

  it('getURLParamValue returns correct value for parameter with special characters in name and value', () => {
    const url = 'https://example.com/?%24param%24=%24value%24'
    const key = '$param$'
    const result = getURLParamValue(url, key)
    expect(result).toBe('$value$')
  })

  it('getURLParamValue returns empty string when parameter does not exist', () => {
    const url = 'https://example.com/?param1=value1&param2=value2'
    const key = 'non-existent'
    const result = getURLParamValue(url, key)
    expect(result).toBe('')
  })
})
