export function addGasMargin(value: bigint, percent = 20): bigint {
  return (value * BigInt(100 + percent)) / 100n
}
