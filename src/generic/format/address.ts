// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, characters = 4): string {
  return `${address.substring(0, characters + 2)}...${address.substring(
    address.length - characters,
  )}`
}
