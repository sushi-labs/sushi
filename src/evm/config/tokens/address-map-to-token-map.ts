import type { Address } from 'viem'
import type { EvmChainId } from '../../chain/index.js'
import { EvmToken, type EvmTokenOrigin } from '../../currency/token.js'

export function addressMapToTokenMap<ChainId extends EvmChainId>(
  {
    decimals,
    symbol,
    name,
    origin,
  }: {
    decimals: number
    symbol: string
    name: string
    origin?: EvmTokenOrigin
  },
  map: Record<ChainId, Address>,
) {
  return Object.fromEntries(
    Object.entries(map).map(([chainId, address]) => [
      Number(chainId) as ChainId,
      new EvmToken({
        chainId: Number(chainId) as EvmChainId,
        address: address as Address,
        decimals,
        symbol,
        name,
        origin,
        metadata: { approved: true },
      }),
    ]),
  ) as Record<ChainId, EvmToken<{ approved: boolean }>>
}
