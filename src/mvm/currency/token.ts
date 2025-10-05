import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'
import { isMvmChainId, type MvmChainId } from '../chain/chains.js'

export type MvmAddress = `0x${string}::${string}::${string}`

export function isMvmAddress(address: string): address is MvmAddress {
  // 0x${string}::${string}::${string}
  return !!address.match(/^0x([^:]+)::([^:]+)::([^:]+)$/)
}

export class MvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<MvmChainId, MvmAddress, TMetadata> {
  constructor({
    address,
    ...rest
  }: ConstructorParameters<
    typeof Token<MvmChainId, MvmAddress, TMetadata>
  >[0]) {
    super({ address: address.toLowerCase() as MvmAddress, ...rest })
  }

  public override wrap(): MvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedMvmToken<TMetadata> {
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
    data: Omit<SerializedMvmToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): MvmToken<TMetadata> {
    return new this(data)
  }
}

export const serializedMvmTokenSchema = <
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
      .refine(isMvmChainId)
      .transform((chainId) => chainId as MvmChainId),
    address: z
      .string()
      .refine(isMvmAddress)
      .transform((address) => address as MvmAddress),
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

export type SerializedMvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedMvmTokenSchema<TMetadata>>>
