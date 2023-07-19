/**
 * Generates a random UUID (v4) using the `crypto` API. <br />
 * If the environment does not support the `crypto.randomUUID` method, a random UUID string
 * is generated using the `crypto.getRandomValues` method.
 * @since v0.0.1
 * @category Generate
 * @returns {string} The generated UUID.
 *
 * @example
 * // find an object in the list
 * console.log(
 *  randomUUID()
 * )
 * => '59c1d248-a20f-4e11-bcbb-426fe682a78f'
 *
 */
export default function randomUUID(): string {
  if (
    typeof crypto === 'undefined' ||
    typeof crypto.randomUUID !== 'function'
  ) {
    return generateUUID()
  }
  return crypto.randomUUID()
}

function generateUUID() {
  const buf = new Uint16Array(8)
  crypto.getRandomValues(buf)
  return (
    pad4(buf[0].toString(16)) +
    pad4(buf[1].toString(16)) +
    '-' +
    pad4(buf[2].toString(16)) +
    '-' +
    pad4(((buf[3] & 0xfff) | 0x4000).toString(16)) +
    '-' +
    pad4(((buf[4] & 0x3fff) | 0x8000).toString(16)) +
    '-' +
    pad4(buf[5].toString(16)) +
    pad4(buf[6].toString(16)) +
    pad4(buf[7].toString(16))
  )
}

/**
 * Pads a hexadecimal string with leading zeros to a length of 4 characters.
 * @param {string} str - The string to pad.
 * @returns {string} The padded string.
 */
function pad4(str: string): string {
  return str.padStart(4, '0')
}
