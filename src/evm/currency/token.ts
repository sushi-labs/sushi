import invariant from 'tiny-invariant'
import { type Address, isAddress } from 'viem'
import * as z from 'zod'
import { type EvmChainId, isEvmChainId } from '~evm/chain/chains.js'
import { Token } from '~generic/currency/token.js'

export type EvmTokenOrigin =
  | 'native'
  | 'stargate'
  | 'celer'
  | 'wormhole'
  | 'native-bridge'

export class EvmToken extends Token<EvmChainId, Address> {
  public readonly origin: EvmTokenOrigin | undefined

  constructor({
    origin,
    ...rest
  }: {
    origin?: EvmTokenOrigin | undefined
  } & ConstructorParameters<typeof Token<EvmChainId, Address>>[0]) {
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

  public override toJSON(): SerializedEvmToken {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,
    } as const
  }

  static fromJSON(data: SerializedEvmToken): EvmToken {
    return new this(data)
  }
}

export const serializedEvmTokenSchema = z.object({
  chainId: z.number().int().refine(isEvmChainId),
  address: z
    .string()
    .refine((address) => isAddress(address, { strict: false })),
  symbol: z.string(),
  name: z.string(),
  decimals: z.number().int().nonnegative(),
  type: z.literal('token'),
})

export type SerializedEvmToken = z.infer<typeof serializedEvmTokenSchema>
