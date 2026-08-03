import type { StellarAddress } from '../address.js'
import { normalizeStellarAddress } from './normalize-address.js'

export function isStellarAddressEqual(
  a: StellarAddress,
  b: StellarAddress,
): boolean {
  return normalizeStellarAddress(a) === normalizeStellarAddress(b)
}
