import * as z from 'zod'
import { Token } from '~generic/currency/token.js'
import { type TvmChainId, isTvmChainId } from '~tvm/chain/chains.js'
import type { CurrencyMetadata } from '~/generic/currency/currency.js'

export type TvmAddress = `T${string}`

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
    ...rest
  }: {
    origin?: TvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<TvmChainId, TvmAddress, TMetadata>
  >[0]) {
    super(rest)
    this.origin = origin
  }

  public override wrap(): TvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedTvmToken {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,
    } as const
  }
}

export const serializedTvmTokenSchema = z.object({
  chainId: z.number().int().refine(isTvmChainId),
  address: z.string().refine(isTvmAddress),
  symbol: z.string(),
  name: z.string(),
  decimals: z.number().int().nonnegative(),
  type: z.literal('token'),
})

export type SerializedTvmToken = z.infer<typeof serializedTvmTokenSchema>
