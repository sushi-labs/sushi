import type { SvmAddress } from '../currency/token.js'
import { normalizeSvmAddress } from './normalize-address.js'

export function isSvmAddressEqual(a: SvmAddress, b: SvmAddress): boolean {
  return normalizeSvmAddress(a) === normalizeSvmAddress(b)
}
