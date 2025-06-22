import { EvmChainId } from '~evm/chain/chains.js'
import { AMPL_ADDRESS } from '~evm/config/tokens/tokens/AMPL.js'
import { DAI } from '~evm/config/tokens/tokens/DAI.js'
import type { EvmToken } from '~evm/currency/token.js'
import { WNATIVE } from '../wrapped-native.js'

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = {
  [EvmChainId.ETHEREUM]: {
    [AMPL_ADDRESS[EvmChainId.ETHEREUM]]: [
      DAI[EvmChainId.ETHEREUM],
      WNATIVE[EvmChainId.ETHEREUM],
    ],
  },
} as const satisfies Partial<Record<EvmChainId, Record<string, EvmToken[]>>>
