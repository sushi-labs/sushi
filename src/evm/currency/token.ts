import invariant from 'tiny-invariant'
import { type Address, isAddress } from 'viem'
import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { Token } from '../../generic/currency/token.js'
import { type EvmChainId, isEvmChainId } from '../chain/chains.js'

export type EvmAddress = Address

export function isEvmAddress(address: string): address is EvmAddress {
  return isAddress(address, { strict: false })
}

export type EvmTokenOrigin =
  | 'native'
  | 'stargate'
  | 'celer'
  | 'wormhole'
  | 'native-bridge'

export class EvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<EvmChainId, EvmAddress, TMetadata> {
  public readonly origin: EvmTokenOrigin | undefined

  constructor({
    origin,
    ...rest
  }: {
    origin?: EvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<EvmChainId, EvmAddress, TMetadata>
  >[0]) {
    super(rest)
    this.origin = origin
  }

  public sortsBefore(other: EvmToken): boolean {
    invariant(
      this.chainId === other.chainId,
      'Tokens must be on the same chain',
    )
    invariant(
      this.address.toLowerCase() !== other.address.toLowerCase(),
      'Tokens must have different addresses',
    )
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  public override wrap(): EvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedEvmToken<TMetadata> {
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
    data: Omit<SerializedEvmToken<TMetadata>, 'metadata'> & {
      metadata?: TMetadata
    },
  ): EvmToken<TMetadata> {
    return new this(data)
  }
}

export const serializedEvmTokenSchema = <
  TMetadata extends {} = CurrencyMetadata,
>({
  metadata,
}: { metadata?: z.ZodType<TMetadata> } = {}) =>
  z.object({
    chainId: z.number().int().refine(isEvmChainId),
    address: z.string().refine(isEvmAddress),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('token'),

    metadata: (metadata ||
      z.record(z.unknown()).optional().default({})) as z.ZodType<TMetadata>,
  })

export type SerializedEvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedEvmTokenSchema<TMetadata>>>
