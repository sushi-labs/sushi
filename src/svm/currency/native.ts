import * as z from 'zod'
import type { CurrencyMetadata } from '~/generic/currency/currency.js'
import { Native } from '../../generic/currency/native.js'
import {
  getSvmChainById,
  isSvmChainId,
  type SvmChainId,
} from '../chain/chains.js'
import { SVM_WNATIVE } from '../config/tokens/wrapped-native.js'
import { SvmToken } from './token.js'

export class SvmNative<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Native<SvmChainId, TMetadata> {
  public override wrap(): SvmToken<TMetadata> {
    return new SvmToken({
      ...SVM_WNATIVE[this.chainId],
      metadata: structuredClone(this.metadata),
    })
  }

  public override toJSON(): SerializedSvmNative<TMetadata> {
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
    data: Omit<SerializedSvmNative<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): SvmNative<TMetadata> {
    return new this(data)
  }

  static fromChainId(chainId: SvmChainId): SvmNative {
    const chain = getSvmChainById(chainId)

    return new SvmNative({
      chainId,
      symbol: chain.nativeCurrency.symbol,
      name: chain.nativeCurrency.name,
      decimals: chain.nativeCurrency.decimals,
    })
  }
}

export const serializedSvmNativeSchema = <
  TMetadata extends {} = CurrencyMetadata,
>({
  metadata,
}: {
  metadata?: z.ZodType<TMetadata>
} = {}) =>
  z.object({
    chainId: z
      .number()
      .int()
      .refine(isSvmChainId)
      .transform((chainId) => chainId as SvmChainId),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('native'),

    metadata: (metadata ||
      z
        .record(z.string(), z.unknown())
        .optional()
        .default({})) as z.ZodType<TMetadata>,
  })

export type SerializedSvmNative<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedSvmNativeSchema<TMetadata>>>
