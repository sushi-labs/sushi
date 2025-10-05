import * as z from 'zod'
import type { CurrencyMetadata } from '~/generic/currency/currency.js'
import { Native } from '../../generic/currency/native.js'
import {
  type EvmChainId,
  getEvmChainById,
  isEvmChainId,
} from '../chain/chains.js'
import { WNATIVE } from '../config/tokens/wrapped-native.js'
import { EvmToken } from './token.js'

export class EvmNative<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Native<EvmChainId, TMetadata> {
  public override wrap(): EvmToken<TMetadata> {
    return new EvmToken({
      ...WNATIVE[this.chainId],
      metadata: structuredClone(this.metadata),
    })
  }

  public override toJSON(): SerializedEvmNative<TMetadata> {
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
    data: Omit<SerializedEvmNative<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): EvmNative<TMetadata> {
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

export const serializedEvmNativeSchema = <
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
      .refine(isEvmChainId)
      .transform((chainId) => chainId as EvmChainId),
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

export type SerializedEvmNative<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedEvmNativeSchema<TMetadata>>>
