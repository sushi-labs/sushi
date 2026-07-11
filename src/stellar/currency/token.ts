import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { createSerializedTokenSchema } from '../../generic/currency/serialized-token.js'
import { Token } from '../../generic/currency/token.js'
import {
  isStellarAccountAddress,
  isStellarContractAddress,
  type StellarAccountAddress,
  type StellarContractAddress,
} from '../address.js'
import { isStellarChainId, type StellarChainId } from '../chain/chains.js'
import { normalizeStellarAddress } from '../utils/normalize-address.js'

export class StellarToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<StellarChainId, StellarContractAddress, TMetadata> {
  public readonly origin: string | undefined
  public readonly issuer: StellarAccountAddress | undefined

  constructor({
    issuer,
    origin,
    address,
    ...rest
  }: {
    issuer?: StellarAccountAddress | undefined
    origin?: string
  } & ConstructorParameters<
    typeof Token<StellarChainId, StellarContractAddress, TMetadata>
  >[0]) {
    super({ address: normalizeStellarAddress(address), ...rest })
    this.issuer = issuer ? normalizeStellarAddress(issuer) : issuer
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
  createSerializedTokenSchema({
    isChainId: isStellarChainId,
    isAddress: isStellarContractAddress,
    metadata,
    extra: {
      issuer: z
        .string()
        .refine(isStellarAccountAddress)
        .transform((value) => value as StellarAccountAddress)
        .optional(),
    },
  })

export type SerializedStellarToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedStellarTokenSchema<TMetadata>>>
