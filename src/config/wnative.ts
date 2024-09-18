import { zeroAddress } from 'viem'
import type { ChainId } from '../chain/index.js'
import { WNATIVE_ADDRESS } from '../currency/index.js'

export const isWNativeSupported = (chainId: ChainId) =>
  WNATIVE_ADDRESS[chainId] !== zeroAddress
