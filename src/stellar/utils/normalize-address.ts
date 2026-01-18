import type { StellarAddress } from '../address.js'

export function normalizeStellarAddress(
  address: StellarAddress,
): StellarAddress {
  return address.toUpperCase() as StellarAddress
}
