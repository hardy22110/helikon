/**
 * This function receives a list of objects and a target object.
 * It will try to find an object in the list that matches the properties of the target object.
 * If a match is found, it returns the matching object and its index in the list,
 * otherwise it returns undefined and -1.
 * @since v1.0.4
 * @category Array
 * @param objectArray An array of objects, where each object represents a record with key-value pairs.
 * @param target An object representing the record to be searched in the list.
 * @returns If the target object is found, the function returns a tuple with the matching object and its index in the list.
 * If the target object is not found, the function returns a tuple with undefined and -1.
 * @example
 *
 * // find an object in the list
 * const exampleListA = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  findTargetObject(exampleListA, { ID: 1 })
 * )
 * => [{ ID: 1, label: 'label1' }, 0]
 *
 * @example
 * // not found
 * const exampleListB = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  findTargetObject(exampleListB, { ID: 3 })
 * )
 * => [undefined, -1]
 */
export default function findTargetObject<T extends Record<string, any>>(
  objectArray: T[],
  target: Record<string, any>
): [T, number] | [undefined, -1] {
  const notFoundTarget: [undefined, -1] = [undefined, -1]
  try {
    if (Object.keys(target).length === 0) {
      return notFoundTarget
    }
    const targetIndex = objectArray.findIndex((item) =>
      Object.keys(target).every((key) => target[key] === item[key])
    )
    return targetIndex !== -1
      ? [objectArray[targetIndex], targetIndex]
      : notFoundTarget
  } catch {
    return notFoundTarget
  }
}
