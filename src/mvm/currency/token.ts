import type * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { createSerializedTokenSchema } from '../../generic/currency/serialized-token.js'
import { Token } from '../../generic/currency/token.js'
import { isMvmChainId, type MvmChainId } from '../chain/chains.js'
import { normalizeMvmAddress } from '../utils/normalize-address.js'

export type MvmAddress = `0x${string}::${string}::${string}`
export type MvmTxHash = string

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
    super({ address: normalizeMvmAddress(address), ...rest })
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
    }
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
  createSerializedTokenSchema({
    isChainId: isMvmChainId,
    isAddress: isMvmAddress,
    metadata,
  })

export type SerializedMvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedMvmTokenSchema<TMetadata>>>
