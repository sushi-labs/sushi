import { EvmChainId } from '../../chain/evm/index.js'
import { AMPL_ADDRESS, DAI, type Token, WNATIVE } from '../../currency/index.js'

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] }
} = {
  [EvmChainId.ETHEREUM]: {
    [AMPL_ADDRESS[EvmChainId.ETHEREUM]]: [
      DAI[EvmChainId.ETHEREUM],
      WNATIVE[EvmChainId.ETHEREUM],
    ],
  },
}
