import { isAddress, type Address } from 'viem'
import { evmChainIds, type EvmChainId } from '~evm/chain/chains.js'
import type { Currency } from '~generic/currency/currency.js'
import type { Token } from '~generic/currency/token.js'

export type EvmToken = Token<EvmChainId, Address>

export type EvmTokenOrigin =
  | 'native'
  | 'stargate'
  | 'celer'
  | 'wormhole'
  | 'native-bridge'

export function createEvmToken({
  chainId,
  address,
  symbol,
  name,
  decimals,
  // origin = 'native',
}: {
  chainId: EvmChainId
  address: Address
  symbol: string
  name: string
  decimals: number
  origin?: EvmTokenOrigin | undefined
}): EvmToken {
  return {
    chainId,
    address,
    symbol,
    name,
    decimals,
    // origin,
    type: 'token',
  }
}

export function isEvmToken(currency: Currency): currency is EvmToken {
  return (
    currency.type === 'token' &&
    'address' in currency &&
    typeof currency.address === 'string' &&
    isAddress(currency.address, { strict: false }) &&
    evmChainIds.includes(currency.chainId as EvmChainId)
  )
}

export function serializeEvmToken(token: EvmToken) {
  return {
    chainId: token.chainId,
    address: token.address,
    symbol: token.symbol,
    name: token.name,
    decimals: token.decimals,
    type: token.type,
  } as const
}

export type SerializedEvmToken = ReturnType<typeof serializeEvmToken>
