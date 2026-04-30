import { StellarChainId } from '../../../../stellar/chain/index.js'
import type { StellarCurrency } from '../../../../stellar/currency/currency.js'
import type { StellarToken } from '../../../../stellar/currency/token.js'
import { STELLAR_USDC } from '../tokens/USDC.js'

export const STELLAR_STABLES = {
  [StellarChainId.STELLAR]: [STELLAR_USDC[StellarChainId.STELLAR]],
} as const satisfies Record<StellarChainId, StellarToken[]>

export function isStellarStable(currency: StellarCurrency): boolean {
  return STELLAR_STABLES[currency.chainId]?.some(
    (stable) => stable.address.toLowerCase() === currency.address.toLowerCase(),
  )
}
