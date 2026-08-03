import type { EvmAddress } from '../currency/token.js'
import { normalizeEvmAddress } from './normalize-address.js'

export function isEvmAddressEqual(a: EvmAddress, b: EvmAddress): boolean {
  return normalizeEvmAddress(a) === normalizeEvmAddress(b)
}
