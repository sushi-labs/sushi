import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'
import { isTvmChainId, type TvmChainId } from '../chain/chains.js'
import { normalizeTvmAddress } from '../utils/normalize-address.js'

export type TvmAddress = `T${string}`
export type TvmTxHash = string

export function isTvmAddress(address: string): address is TvmAddress {
  return !!address.match(/^T[1-9A-HJ-NP-Za-km-z]{33}$/)
}

export type TvmTokenOrigin = 'native'

export class TvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<TvmChainId, TvmAddress, TMetadata> {
  public readonly origin: TvmTokenOrigin | undefined

  constructor({
    origin,
    address,
    ...rest
  }: {
    origin?: TvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<TvmChainId, TvmAddress, TMetadata>
  >[0]) {
    super({ address: normalizeTvmAddress(address), ...rest })
    this.origin = origin
  }

  public override wrap(): TvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedTvmToken<TMetadata> {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,

      metadata: this.metadata,
    } as const
  }

  static fromJSON<TMetadata extends CurrencyMetadata>(
    data: Omit<SerializedTvmToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): TvmToken<TMetadata> {
    return new this(data)
  }
}

export const serializedTvmTokenSchema = <
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
      .refine(isTvmChainId)
      .transform((chainId) => chainId as TvmChainId),
    address: z
      .string()
      .refine(isTvmAddress)
      .transform((chainId) => chainId as TvmAddress),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('token'),

    metadata: (metadata ||
      z
        .record(z.string(), z.unknown())
        .optional()
        .default({})) as z.ZodType<TMetadata>,
  })

export type SerializedTvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedTvmTokenSchema<TMetadata>>>
