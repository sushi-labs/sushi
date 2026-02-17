export type StellarAddress = `G${string}`
export type StellarContractAddress = `C${string}`
export type StellarTxHash = string

const stellarAddressRegex = /^G[A-Z2-7]{55}$/

export function isStellarAddress(address: string): address is StellarAddress {
  return stellarAddressRegex.test(address)
}

const stellarContractAddressRegex = /^C[A-Z2-7]{55}$/

export function isStellarContractAddress(
  address: string,
): address is StellarContractAddress {
  return stellarContractAddressRegex.test(address)
}
