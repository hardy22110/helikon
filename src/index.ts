import { version } from '../package.json'

/**
 * @since 0.0.0
 * get the version
 * @returns {string} version
 * @example
 *
 * console.log(
 *  getVersion()
 * )
 * => 'v0.0.0'
 */
export function getVersion(): string {
  return `v${version}`
}

export * as utils from './utils'
