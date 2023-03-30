import findTargetObject from '@/utils/arrayUtils/findTargetObject'

describe('findTargetObject', () => {
  const list = [
    { ID: 1, label: 'label1' },
    { ID: 2, label: 'label2' },
    { ID: 3, label: 'label3' }
  ]

  it('returns undefined and -1 when target is an empty object', () => {
    const target = {}
    const result = findTargetObject(list, target)
    expect(result).toEqual([undefined, -1])
  })

  it('returns the matching object and its index when target is found', () => {
    const target = { ID: 2, label: 'label2' }
    const result = findTargetObject(list, target)
    expect(result).toEqual([{ ID: 2, label: 'label2' }, 1])
  })

  it('returns undefined and -1 when target is not found', () => {
    const target = { ID: 4, label: 'label4' }
    const result = findTargetObject(list, target)
    expect(result).toEqual([undefined, -1])
  })

  it('returns the first matching object and its index when there are multiple matches', () => {
    const target = { label: 'label3' }
    const result = findTargetObject(list, target)
    expect(result).toEqual([{ ID: 3, label: 'label3' }, 2])
  })

  it('returns undefined and -1 when list is empty', () => {
    const target = { ID: 1 }
    const result = findTargetObject([], target)
    expect(result).toEqual([undefined, -1])
  })

  it('returns undefined and -1 when list is not an array', () => {
    const target = { ID: 1 }
    const result = findTargetObject('invalID list' as any, target)
    expect(result).toEqual([undefined, -1])
  })

  it('returns undefined and -1 when target is not an object', () => {
    const target = 'invalID target'
    const result = findTargetObject(list, target as any)
    expect(result).toEqual([undefined, -1])
  })
})
