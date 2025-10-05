import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'

import { isKvmChainId, type KvmChainId } from '../chain/chains.js'

export type KvmTokenAddress = `${string}.${string}` | 'coin'

export function isKvmTokenAddress(address: string): address is KvmTokenAddress {
  if (address === 'coin') return true
  // `${string}.${string}` - namespace.name - string parts can include alphanumeric characters, underscores, and dashes
  return !!address.match(/^([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/)
}

export type KvmTokenOrigin = 'native'

export class KvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<KvmChainId, KvmTokenAddress, TMetadata> {
  public readonly origin: KvmTokenOrigin | undefined

  constructor({
    origin,
    ...rest
  }: {
    origin?: KvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<KvmChainId, KvmTokenAddress, TMetadata>
  >[0]) {
    super(rest)
    this.origin = origin
  }

  public override wrap(): KvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedKvmToken<TMetadata> {
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
    data: Omit<SerializedKvmToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): KvmToken<TMetadata> {
    return new this(data)
  }
}

export const serializedKvmTokenSchema = <
  TMetadata extends {} = CurrencyMetadata,
>({
  metadata,
}: {
  metadata?: z.ZodType<TMetadata>
} = {}) =>
  z.object({
    chainId: z.number().int().refine(isKvmChainId).transform((chainId) => chainId as KvmChainId),
    address: z.string().refine(isKvmTokenAddress).transform((address) => address as KvmTokenAddress),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('token'),

    metadata: (metadata ||
      z.record(z.string(), z.unknown()).optional().default({})) as z.ZodType<TMetadata>,
  })

export type SerializedKvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedKvmTokenSchema<TMetadata>>>
