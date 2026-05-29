export type StellarAccountAddress = `G${string}`
export type StellarContractAddress = `C${string}`
export type StellarAddress = StellarAccountAddress | StellarContractAddress
export type StellarTxHash = string

const stellarAccountAddressRegex = /^G[A-Z2-7]{55}$/
const stellarContractAddressRegex = /^C[A-Z2-7]{55}$/
const stellarAddressRegex = /^[GC][A-Z2-7]{55}$/

export function isStellarAccountAddress(
  address: string,
): address is StellarAccountAddress {
  return stellarAccountAddressRegex.test(address)
}

export function isStellarContractAddress(
  address: string,
): address is StellarContractAddress {
  return stellarContractAddressRegex.test(address)
}

export function isStellarAddress(address: string): address is StellarAddress {
  return stellarAddressRegex.test(address)
}
