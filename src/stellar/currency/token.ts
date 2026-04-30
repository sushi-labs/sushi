import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'
import { isStellarAddress, type StellarAddress } from '../address.js'
import { isStellarChainId, type StellarChainId } from '../chain/chains.js'
import { normalizeStellarAddress } from '../utils/normalize-address.js'

export class StellarToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<StellarChainId, StellarAddress, TMetadata> {
  public readonly origin: string | undefined
  public readonly issuer: StellarAddress | undefined

  constructor({
    issuer,
    origin,
    address,
    ...rest
  }: {
    issuer?: StellarAddress | undefined
    origin?: string
  } & ConstructorParameters<
    typeof Token<StellarChainId, StellarAddress, TMetadata>
  >[0]) {
    super({ address: normalizeStellarAddress(address), ...rest })
    this.issuer = issuer
    this.origin = origin
  }

  public override wrap(): StellarToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedStellarToken<TMetadata> {
    return {
      chainId: this.chainId,
      address: this.address,
      issuer: this.issuer,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,

      metadata: this.metadata,
    } as const
  }

  static fromJSON<TMetadata extends CurrencyMetadata>(
    data: Omit<SerializedStellarToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): StellarToken<TMetadata> {
    return new this(data)
  }
}

export const serializedStellarTokenSchema = <
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
      .refine(isStellarChainId)
      .transform((chainId) => chainId as StellarChainId),
    address: z
      .string()
      .refine(isStellarAddress)
      .transform((address) => address as StellarAddress),
    issuer: z
      .string()
      .refine(isStellarAddress)
      .transform((address) => address as StellarAddress)
      .optional(),
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

export type SerializedStellarToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedStellarTokenSchema<TMetadata>>>
