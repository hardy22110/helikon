import filterObjectArray from '@/utils/arrayUtils/filterObjectArray'

describe('filterObjectArray', () => {
  const objectList = [
    {
      a: 1,
      b: 1,
      flag: true
    },
    {
      a: 2,
      b: 2,
      flag: true
    },
    {
      a: 3,
      b: 3,
      flag: false
    }
  ]

  it('call filterObjectArray(objectList, { a: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectArray(objectList, { a: 1 })).toStrictEqual([
      objectList[0]
    ])
    expect(filterObjectArray(objectList, ({ a }) => a === 1)).toStrictEqual([
      objectList[0]
    ])
  })

  it('call filterObjectArray(objectList, { a: 1, b: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectArray(objectList, { a: 1, b: 1 })).toStrictEqual([
      objectList[0]
    ])
    expect(
      filterObjectArray(objectList, ({ a, b }) => a === 1 && b === 1)
    ).toStrictEqual([objectList[0]])
  })

  it('call filterObjectArray(objectList, { flag: true }) returns [objectList[0], objectList[1]]', () => {
    expect(filterObjectArray(objectList, { flag: true })).toStrictEqual([
      objectList[0],
      objectList[1]
    ])
    expect(filterObjectArray(objectList, ({ flag }) => flag)).toStrictEqual([
      objectList[0],
      objectList[1]
    ])
  })

  it('call filterObjectArray(objectList, { a: 1, c: 1 }) returns []', () => {
    expect(filterObjectArray(objectList, { a: 1, c: 1 })).toStrictEqual([])
    expect(
      filterObjectArray(objectList, ({ a, c }: any) => a === 1 && c === 1)
    ).toStrictEqual([])
  })

  it('call filterObjectArray(objectList, { a: 3 }) returns []', () => {
    expect(filterObjectArray(objectList, { a: 3 })).toStrictEqual([
      objectList[2]
    ])
    expect(filterObjectArray(objectList, ({ a }) => a === 3)).toStrictEqual([
      objectList[2]
    ])
  })

  it('call filterObjectArray(objectList, undefined) returns objectList', () => {
    expect(filterObjectArray(objectList, undefined as any)).toStrictEqual(
      objectList
    )
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(filterObjectArray(objectList, () => ({}))).toStrictEqual(objectList)
    expect(filterObjectArray(objectList, () => null)).toStrictEqual([])
    expect(filterObjectArray(objectList, () => undefined)).toStrictEqual([])
    expect(filterObjectArray(objectList, () => true)).toStrictEqual(objectList)
    expect(filterObjectArray(objectList, () => false)).toStrictEqual([])
    expect(filterObjectArray(objectList, () => [])).toStrictEqual(objectList)
    expect(filterObjectArray(objectList, null as any)).toStrictEqual(objectList)
    expect(filterObjectArray(objectList, [])).toStrictEqual(objectList)
    expect(filterObjectArray(objectList, {})).toStrictEqual(objectList)
  })

  it(`call filterObjectArray(objectList, { a: '1' }) returns []`, () => {
    expect(
      filterObjectArray(objectList, ({ a }: any) => a === '1')
    ).toStrictEqual([])
  })

  const objectArray = [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 30 },
    { name: 'Peter', age: 40 },
    { name: 'Mike', age: 50 }
  ]

  test('should return empty array if input array is empty', () => {
    expect(filterObjectArray([], { name: 'John' })).toEqual([])
  })

  test('should return same array if condition is not provided', () => {
    expect(filterObjectArray(objectArray, undefined as any)).toEqual(
      objectArray
    )
  })

  test('should return filtered array with condition object', () => {
    expect(filterObjectArray(objectArray, { age: 20 })).toEqual([
      { name: 'John', age: 20 }
    ])
    expect(filterObjectArray(objectArray, { age: 30 })).toEqual([
      { name: 'Mary', age: 30 }
    ])
    expect(filterObjectArray(objectArray, { name: 'Peter', age: 40 })).toEqual([
      { name: 'Peter', age: 40 }
    ])
  })

  test('should return filtered array with condition function', () => {
    const conditionFn = (item: any) => item.age > 30
    expect(filterObjectArray(objectArray, conditionFn)).toEqual([
      { name: 'Peter', age: 40 },
      { name: 'Mike', age: 50 }
    ])
  })

  test('should return original array if error is thrown during filtering', () => {
    expect(filterObjectArray(undefined as any, undefined as any)).toEqual(
      undefined
    )
    expect(filterObjectArray(objectArray, undefined as any)).toEqual(
      objectArray
    )
    expect(filterObjectArray(objectArray, {})).toEqual(objectArray)
    expect(filterObjectArray(objectArray, { foo: 'bar' })).toEqual([])
    expect(
      filterObjectArray(objectArray, () => {
        throw new Error('Some error')
      })
    ).toEqual(objectArray)
  })
})
