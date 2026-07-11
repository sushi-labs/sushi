import {
  isAddress as isSvmAddress,
  type Address as SvmAddress,
  address as svmAddress,
} from '@solana/addresses'
import type * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { createSerializedTokenSchema } from '../../generic/currency/serialized-token.js'
import { Token } from '../../generic/currency/token.js'
import { isSvmChainId, type SvmChainId } from '../chain/chains.js'
import { normalizeSvmAddress } from '../utils/normalize-address.js'

export { isSvmAddress, type SvmAddress, svmAddress }
export type SvmTxHash = string

export type SvmTokenOrigin = 'native' | 'native-bridge'

export class SvmToken<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Token<SvmChainId, SvmAddress, TMetadata> {
  public readonly origin: SvmTokenOrigin | undefined

  constructor({
    origin,
    address,
    ...rest
  }: {
    origin?: SvmTokenOrigin | undefined
  } & ConstructorParameters<
    typeof Token<SvmChainId, SvmAddress, TMetadata>
  >[0]) {
    super({ address: normalizeSvmAddress(address), ...rest })
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
    }
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
  createSerializedTokenSchema({
    isChainId: isSvmChainId,
    isAddress: isSvmAddress,
    metadata,
  })

export type SerializedSvmToken<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedSvmTokenSchema<TMetadata>>>
