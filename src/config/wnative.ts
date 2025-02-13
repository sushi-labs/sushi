import { zeroAddress } from 'viem'
import type { EvmChainId } from '../chain/evm/index.js'
import { WNATIVE_ADDRESS } from '../currency/index.js'

export const isWNativeSupported = (chainId: EvmChainId) =>
  WNATIVE_ADDRESS[chainId] !== zeroAddress
