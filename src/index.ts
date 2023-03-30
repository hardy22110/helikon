import * as arrayUtils from './utils/arrayUtils'
import * as stringUtils from './utils/stringUtils'
import * as numberUtils from './utils/numberUtils'
import * as urlUtils from './utils/urlUtils'
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

export { arrayUtils, stringUtils, numberUtils, urlUtils }
