import { isAddress as _isSvmAddress, type Address } from '@solana/addresses'
import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'
import { isSvmChainId, type SvmChainId } from '../chain/chains.js'

export type SvmAddress<TAddress extends string = string> =
  | Address<TAddress>
  | string

export function isSvmAddress(address: string): address is SvmAddress {
  return _isSvmAddress(address)
}
export type SvmTokenOrigin = 'native' | 'native-bridge'

export class SvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<SvmChainId, SvmAddress, TMetadata> {
  public readonly origin: SvmTokenOrigin | undefined

  constructor({
    origin,
    ...rest
  }: {
    origin?: SvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<SvmChainId, SvmAddress, TMetadata>
  >[0]) {
    super({ ...rest })
    this.origin = origin
  }

  public override wrap(): SvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedSvmToken<TMetadata> {
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
    data: Omit<SerializedSvmToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): SvmToken<TMetadata> {
    return new this(data)
  }
}

export const serializedSvmTokenSchema = <
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
    address: z
      .string()
      .refine(isSvmAddress)
      .transform((address) => address as SvmAddress),
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

export type SerializedSvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedSvmTokenSchema<TMetadata>>>
