import cloneDeep from '@/utils/objectUtils/cloneDeep'

describe('cloneDeep', () => {
  test('should clone a simple object', () => {
    const obj = { name: 'John', age: 25 }
    const clonedObj = cloneDeep(obj)

    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj) // Check if the objects are not the same instance
  })

  test('should clone an object with nested objects', () => {
    const obj = { name: 'John', age: 25, address: { city: 'New York', country: 'USA' } }
    const clonedObj = cloneDeep(obj)

    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.address).toEqual(obj.address)
    expect(clonedObj.address).not.toBe(obj.address)
  })

  test('should clone an object with getters and setters', () => {
    const obj = {
    _age: undefined as any,
      get name() {
        return 'John'
      },
      // eslint-disable-next-line accessor-pairs
      set age(value: number) {
        this._age = value
      }
    }
    const clonedObj = cloneDeep(obj)

    expect(clonedObj.name).toBe('John')
    expect(clonedObj.age).toBeUndefined()

    clonedObj.age = 25

    expect(clonedObj.age).toBe(25)
  })

  test('should handle circular references', () => {
    const obj: any = {}
    obj.self = obj

    const clonedObj = cloneDeep(obj)

    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.self).toBe(clonedObj)
  })
})
