/**
 * Filter the target object in the object array
 * @since v1.0.4
 * @category Array
 * @param list
 * @param object
 * @returns result
 * @example
 *
 * const list = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  filterObjectArray(list, { ID: 1 })
 * )
 * => [{ ID: 1, label: 'label1' }]
 */
export default function filterObjectArray<T extends Record<string, any>>(
  objectArray: T[],
  condition: Record<string, any> | ((item: T) => boolean)
): T[] {
  try {
    return objectArray.filter((item) =>
      typeof condition === 'function'
        ? !!condition(item)
        : Object.keys(condition).every((key) => condition[key] === item[key])
    )
  } catch {
    return objectArray
  }
}
