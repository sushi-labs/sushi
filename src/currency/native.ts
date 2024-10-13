import invariant from 'tiny-invariant'
import { EvmChainId, evmNatives } from '../chain/evm/index.js'
import type { ID } from '../types/id.js'
import { Currency } from './currency.js'
import type { Token } from './token.js'
import { WNATIVE } from './tokens.js'
import type { Type } from './type.js'
import { type SerializedNative, nativeSchema } from './zod.js'

export class Native extends Currency {
  public readonly id: ID
  // public readonly address = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
  public readonly isNative = true as const
  public readonly isToken = false as const
  public override readonly symbol: string
  public override readonly name: string
  protected constructor(native: {
    chainId: EvmChainId
    decimals: number
    symbol: string
    name: string
  }) {
    super({ ...native, approved: true })
    this.id = `${native.chainId}:NATIVE` as ID
    this.symbol = native.symbol
    this.name = native.name
  }
  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  // public get tokenURI(): string {
  //   return `native-currency/${this.symbol.toLowerCase()}.svg`
  // }

  private static cache: Record<number, Native> = {}

  public static onChain(chainId: EvmChainId): Native {
    const cached = this.cache[chainId]

    if (typeof cached !== 'undefined') {
      return cached
    }

    const nativeCurrency = evmNatives?.[chainId]

    invariant(!!nativeCurrency, 'NATIVE_CURRENCY')

    const { decimals, name, symbol } = nativeCurrency

    const native = new Native({
      chainId,
      decimals,
      name,
      symbol,
    })

    this.cache[chainId] = new Native({
      chainId,
      decimals,
      name,
      symbol,
    })

    return native
  }

  public equals(other: Type): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  public serialize(): SerializedNative {
    return nativeSchema.parse({
      isNative: this.isNative,
      name: this.name,
      symbol: this.symbol,
      decimals: this.decimals,
      chainId: this.chainId,
    })
  }

  public static deserialize(native: SerializedNative): Native {
    return Native.onChain(native.chainId)
  }
}
