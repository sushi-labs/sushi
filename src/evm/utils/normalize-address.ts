import type { EvmAddress } from '../currency/token.js'

export function normalizeEvmAddress(address: EvmAddress): EvmAddress {
  return address.toLowerCase() as EvmAddress
}
