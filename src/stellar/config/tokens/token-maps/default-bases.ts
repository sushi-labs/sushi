import { StellarChainId } from '../../../../stellar/chain/index.js'
import type { StellarCurrency } from '../../../../stellar/currency/currency.js'
import { STELLAR_CETES } from '../tokens/CETES.js'
import { STELLAR_EURC } from '../tokens/EURC.js'
import { STELLAR_PYUSD } from '../tokens/PYUSD.js'
import { STELLAR_SOLVBTC } from '../tokens/SolvBTC.js'
import { STELLAR_USDC } from '../tokens/USDC.js'
import { STELLAR_USDY } from '../tokens/USDY.js'
import { STELLAR_USTRY } from '../tokens/USTRY.js'
import { STELLAR_XLM } from '../tokens/XLM.js'
import { STELLAR_XSOLVBTC } from '../tokens/xSolvBTC.js'

export const STELLAR_DEFAULT_BASES = {
  [StellarChainId.STELLAR]: [
    STELLAR_CETES[StellarChainId.STELLAR],
    STELLAR_EURC[StellarChainId.STELLAR],
    STELLAR_PYUSD[StellarChainId.STELLAR],
    STELLAR_SOLVBTC[StellarChainId.STELLAR],
    STELLAR_USDC[StellarChainId.STELLAR],
    STELLAR_USDY[StellarChainId.STELLAR],
    STELLAR_USTRY[StellarChainId.STELLAR],
    STELLAR_XLM[StellarChainId.STELLAR],
    STELLAR_XSOLVBTC[StellarChainId.STELLAR],
  ],
} as const satisfies Record<StellarChainId, Readonly<StellarCurrency[]>>
