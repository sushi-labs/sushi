import { StellarChainId } from '../../../../stellar/chain/index.js'
import type { StellarCurrency } from '../../../../stellar/currency/currency.js'
import { STELLAR_USDC } from '../tokens/USDC.js'
import { STELLAR_XLM } from '../tokens/XLM.js'

export const stellarDefaultCurrency = {
  [StellarChainId.STELLAR]: STELLAR_XLM[StellarChainId.STELLAR],
} as const satisfies Record<StellarChainId, StellarCurrency>

export const stellarDefaultQuoteCurrency = {
  [StellarChainId.STELLAR]: STELLAR_USDC[StellarChainId.STELLAR],
} as const satisfies Record<StellarChainId, StellarCurrency>
