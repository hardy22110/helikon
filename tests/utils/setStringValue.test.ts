import setStringValue from '@/utils/setStringValue'

describe('setStringValue', () => {
  it('should return converted string when value is string', () => {
    const result = setStringValue('test', 'default')
    expect(result).toEqual('test')
  })
  it('should return default value when value is not string', () => {
    const result = setStringValue(123, 'default')
    expect(result).toEqual('default')
  })
  it('should return default value when value is undefined', () => {
    const result = setStringValue(undefined, 'default')
    expect(result).toEqual('default')
  })
  it('should return defaultStringValue if value is number', () => {
    expect(setStringValue(42, 'default')).toBe('default')
  })
  it('should return undefined when defaultStringValue is undefined', () => {
    expect(setStringValue(42, undefined)).toBeUndefined()
  })
})
