import type { EvmToken } from '~evm/currency/token.js'
import type { Amount } from '~generic/index.js'
import type { Fee } from './fee.js'

export abstract class Pool {
  public abstract readonly liquidityToken: EvmToken

  // Swap gas cost, could be different depending on source & dest,
  // wallet->wallet, bento->wallet/wallet->bento, bento->bento

  // wallet->wallet: ???
  // bento->wallet/wallet->bento: ???
  // bento->bento: ???
  public abstract readonly swapGasCost: bigint

  // Minimum pool liquidity, typically 1000
  public abstract readonly minLiquidity: bigint

  public abstract get chainId(): number

  public abstract get fee(): Fee

  public abstract get assets(): EvmToken[]

  public abstract get reserves(): Amount<EvmToken>[]

  public abstract getLiquidityMinted(
    totalSupply: Amount<EvmToken>,
    tokenAmountA: Amount<EvmToken>,
    tokenAmountB: Amount<EvmToken>,
  ): Amount<EvmToken>

  public abstract getLiquidityValue(
    token: EvmToken,
    totalSupply: Amount<EvmToken>,
    liquidity: Amount<EvmToken>,
  ): Amount<EvmToken>

  public abstract involvesToken(token: EvmToken): boolean
}
