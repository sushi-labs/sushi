import * as z from 'zod'
import {
  type EvmChainId,
  getEvmChainById,
  isEvmChainId,
} from '~evm/chain/chains.js'
import { WNATIVE } from '~evm/config/tokens/wrapped-native.js'
import { Native } from '~generic/currency/native.js'
import type { EvmToken } from './token.js'

export class EvmNative extends Native<EvmChainId> {
  public override wrap(): EvmToken {
    return WNATIVE[this.chainId]
  }

  public override toJSON(): SerializedEvmNative {
    return {
      chainId: this.chainId,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,
    } as const
  }

  public static fromJSON(data: SerializedEvmNative): EvmNative {
    return new this(data)
  }

  static fromChainId(chainId: EvmChainId): EvmNative {
    const chain = getEvmChainById(chainId)

    return new EvmNative({
      chainId,
      symbol: chain.viemChain.nativeCurrency.symbol,
      name: chain.viemChain.nativeCurrency.name,
      decimals: chain.viemChain.nativeCurrency.decimals,
    })
  }
}

export const serializedEvmNativeSchema = z.object({
  chainId: z.number().int().refine(isEvmChainId),
  symbol: z.string(),
  name: z.string(),
  decimals: z.number().int().nonnegative(),
  type: z.literal('native'),
})

export type SerializedEvmNative = z.infer<typeof serializedEvmNativeSchema>
