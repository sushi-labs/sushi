import * as z from 'zod'
import type { CurrencyMetadata } from '~/generic/currency/currency.js'
import { Native } from '../../generic/currency/native.js'
import { type TvmChainId, isTvmChainId } from '../chain/chains.js'
import { NATIVE } from '../config/index.js'
import { WNATIVE } from '../config/tokens/wrapped-native.js'
import { TvmToken } from './token.js'

export class TvmNative<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Native<TvmChainId, TMetadata> {
  public override wrap(): TvmToken<TMetadata> {
    return new TvmToken({
      ...WNATIVE[this.chainId],
      metadata: structuredClone(this.metadata),
    })
  }

  public override toJSON(): SerializedTvmNative<TMetadata> {
    return {
      chainId: this.chainId,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,

      metadata: this.metadata,
    } as const
  }

  static fromJSON<TMetadata extends CurrencyMetadata>(
    data: Omit<SerializedTvmNative<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): TvmNative<TMetadata> {
    return new this(data)
  }

  static fromChainId(chainId: TvmChainId): TvmNative {
    return NATIVE[chainId]
  }
}

export const serializedTvmNativeSchema = <
  TMetadata extends {} = CurrencyMetadata,
>({
  metadata,
}: { metadata?: z.ZodType<TMetadata> } = {}) =>
  z.object({
    chainId: z.number().int().refine(isTvmChainId),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('native'),

    metadata: (metadata ||
      z.record(z.unknown()).optional().default({})) as z.ZodType<TMetadata>,
  })

export type SerializedTvmNative<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedTvmNativeSchema<TMetadata>>>
