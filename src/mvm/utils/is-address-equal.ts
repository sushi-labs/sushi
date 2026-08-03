import type { MvmAddress } from '../currency/token.js'
import { normalizeMvmAddress } from './normalize-address.js'

export function isMvmAddressEqual(a: MvmAddress, b: MvmAddress): boolean {
  return normalizeMvmAddress(a) === normalizeMvmAddress(b)
}
