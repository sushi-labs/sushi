import type { Currency } from '~generic/currency/currency.js'
import type { Token } from '~generic/currency/token.js'
import { mvmChainIds, type MvmChainId } from '~mvm/chain/chains.js'

export type MvmToken = Token<MvmChainId, MvmAddress>

export function createMvmToken({
  chainId,
  address,
  symbol,
  name,
  decimals,
}: {
  chainId: MvmChainId
  address: MvmAddress
  symbol: string
  name: string
  decimals: number
}): MvmToken {
  return {
    chainId,
    address,
    symbol,
    name,
    decimals,
    type: 'token',
  }
}

export type MvmAddress = `0x${string}::${string}::${string}`

export function isMvmAddress(address: string): address is MvmAddress {
  // 0x${string}::${string}::${string}
  return !!address.match(/^0x([^:]+)::([^:]+)::([^:]+)$/)
}

export function isMvmToken(currency: Currency): currency is MvmToken {
  return (
    currency.type === 'token' &&
    'address' in currency &&
    typeof currency.address === 'string' &&
    isMvmAddress(currency.address) &&
    mvmChainIds.includes(currency.chainId as MvmChainId)
  )
}
