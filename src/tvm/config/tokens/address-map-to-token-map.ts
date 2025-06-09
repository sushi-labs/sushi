import type { TvmChainId } from '~tvm/chain/index.js'
import {
  type TvmAddress,
  type TvmTokenOrigin,
  TvmToken,
} from '~tvm/currency/token.js'

export function addressMapToTokenMap<ChainId extends TvmChainId>(
  {
    decimals,
    symbol,
    name,
    origin,
  }: {
    decimals: number
    symbol: string
    name: string
    origin?: TvmTokenOrigin
  },
  map: Record<ChainId, TvmAddress>,
): Record<ChainId, TvmToken> {
  return Object.fromEntries(
    Object.entries(map).map(([chainId, address]) => [
      Number(chainId) as ChainId,
      new TvmToken({
        chainId: Number(chainId) as TvmChainId,
        address: address as TvmAddress,
        decimals,
        symbol,
        name,
        origin,
      }),
    ]),
  ) as Record<ChainId, TvmToken>
}
