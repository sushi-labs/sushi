import * as z from 'zod'
import { Native } from '~generic/currency/native.js'
import { type TvmChainId, isTvmChainId } from '~tvm/chain/chains.js'
import { NATIVE } from '~tvm/config/index.js'
import { WNATIVE } from '~tvm/config/tokens/wrapped-native.js'
import type { TvmToken } from './token.js'

export class TvmNative extends Native<TvmChainId> {
  static fromChainId(chainId: TvmChainId): TvmNative {
    return NATIVE[chainId]
  }

  public override wrap(): TvmToken {
    return WNATIVE[this.chainId]
  }

  public override toJSON(): SerializedTvmNative {
    return {
      chainId: this.chainId,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,
    } as const
  }

  public static fromJSON(data: SerializedTvmNative): TvmNative {
    return new this(data)
  }
}

export const serializedTvmNativeSchema = z.object({
  chainId: z.number().int().refine(isTvmChainId),
  symbol: z.string(),
  name: z.string(),
  decimals: z.number().int().nonnegative(),
  type: z.literal('native'),
})

export type SerializedTvmNative = z.infer<typeof serializedTvmNativeSchema>
