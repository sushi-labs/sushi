import type { StellarAddress } from '../address.js'

export function normalizeStellarAddress<TAddress extends StellarAddress>(
  address: TAddress,
): TAddress {
  return address.toUpperCase() as TAddress
}
