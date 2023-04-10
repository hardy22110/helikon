/**
 * Deep clone an object.
 * @since vx.x.x
 * @category Object
 * @param obj - The object to be cloned.
 * @param visited - A WeakMap object that keeps track of visited objects.
 * @returns {T} The cloned object.
 */
export default function cloneDeep<T extends Record<string, unknown>>(
  obj: T,
  visited = new WeakMap()
): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (visited.has(obj)) {
    return visited.get(obj) as T
  }

  const clonedObj: any = Array.isArray(obj) ? [] : {}

  visited.set(obj, clonedObj)

  for (const [key, value] of Object.entries(obj)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key)
    const isSymbol = typeof key === 'symbol'

    clonedObj[isSymbol ? key : (key as keyof T)] =
      typeof value === 'object' && value !== null
        ? cloneDeep(value as Record<string, unknown>, visited)
        : value
    if (!isSymbol && descriptor?.get) {
      Object.defineProperty(clonedObj, key, {
        get: descriptor.get,
        set: descriptor.set
      })
    }
  }

  return clonedObj as T
}
