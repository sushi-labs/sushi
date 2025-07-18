import * as z from 'zod'
import type { CurrencyMetadata } from '~/generic/currency/currency.js'
import { Token } from '~generic/currency/token.js'
import { type MvmChainId, isMvmChainId } from '~mvm/chain/chains.js'

export type MvmAddress = `0x${string}::${string}::${string}`

export function isMvmAddress(address: string): address is MvmAddress {
  // 0x${string}::${string}::${string}
  return !!address.match(/^0x([^:]+)::([^:]+)::([^:]+)$/)
}

export class MvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<MvmChainId, MvmAddress, TMetadata> {
  public override wrap(): MvmToken<TMetadata> {
    return this
  }

  public override toJSON(): SerializedMvmToken {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
      type: this.type,
    } as const
  }

  static fromJSON(data: SerializedMvmToken): MvmToken {
    return new this(data)
  }
}

export const serializedMvmTokenSchema = z.object({
  chainId: z.number().int().refine(isMvmChainId),
  address: z.string().refine(isMvmAddress),
  symbol: z.string(),
  name: z.string(),
  decimals: z.number().int().nonnegative(),
  type: z.literal('token'),
})

export type SerializedMvmToken = z.infer<typeof serializedMvmTokenSchema>
