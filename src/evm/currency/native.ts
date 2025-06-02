import {
  evmChainIds,
  getEvmChainById,
  type EvmChainId,
} from '~evm/chain/chains.js'
import type { Currency } from '~generic/currency/currency.js'
import type { Native } from '~generic/currency/native.js'

export type EvmNative = Native<EvmChainId>

export function createEvmNative({
  chainId,
  symbol,
  name,
  decimals,
}: {
  chainId: EvmChainId
  symbol: string
  name: string
  decimals: number
}): EvmNative {
  return {
    chainId,
    symbol,
    name,
    decimals,
    type: 'native',
  }
}

export function isEvmNative(currency: Currency): currency is EvmNative {
  return (
    currency.type === 'native' &&
    evmChainIds.includes(currency.chainId as EvmChainId)
  )
}

export function serializeEvmNative(native: EvmNative) {
  return {
    chainId: native.chainId,
    symbol: native.symbol,
    name: native.name,
    decimals: native.decimals,
    type: native.type,
  } as const
}

export type SerializedEvmNative = ReturnType<typeof serializeEvmNative>

export function getEvmNativeByChainId(chainId: EvmChainId): EvmNative {
  const chain = getEvmChainById(chainId)

  return createEvmNative({
    chainId,
    symbol: chain.viemChain.nativeCurrency.symbol,
    name: chain.viemChain.nativeCurrency.name,
    decimals: chain.viemChain.nativeCurrency.decimals,
  })
}
