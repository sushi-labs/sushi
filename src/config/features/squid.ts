import type { Hex } from 'viem'
import { EvmChainId } from '../../chain/evm/index.js'

export const SquidIntegratorId = 'sushiswap-sdk'

export const SquidApiURL = 'https://apiplus.squidrouter.com/v2'

export const SQUID_CHAIN_NAME = {
  [EvmChainId.ARBITRUM]: 'Arbitrum',
  [EvmChainId.AVALANCHE]: 'Avalanche',
  [EvmChainId.BASE]: 'base',
  [EvmChainId.BSC]: 'binance',
  [EvmChainId.CELO]: 'celo',
  [EvmChainId.ETHEREUM]: 'Ethereum',
  [EvmChainId.FANTOM]: 'Fantom',
  [EvmChainId.FILECOIN]: 'filecoin',
  [EvmChainId.KAVA]: 'kava',
  [EvmChainId.MOONBEAM]: 'Moonbeam',
  [EvmChainId.OPTIMISM]: 'optimism',
  [EvmChainId.POLYGON_ZKEVM]: 'polygon-zkevm',
  [EvmChainId.POLYGON]: 'Polygon',
  [EvmChainId.LINEA]: 'linea',
  [EvmChainId.SCROLL]: 'scroll',
  [EvmChainId.BLAST]: 'blast',
} as const

export const SQUID_ROUTER_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.BSC]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.POLYGON]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.AVALANCHE]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.FANTOM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.MOONBEAM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.ARBITRUM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.OPTIMISM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.BASE]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.CELO]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.KAVA]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.FILECOIN]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.LINEA]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.SCROLL]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
  [EvmChainId.BLAST]: '0x492751eC3c57141deb205eC2da8bFcb410738630',
} as const

export enum SquidMulticallCallType {
  Default = 0,
  FullTokenBalance = 1,
  FullNativeBalance = 2,
  CollectTokenBalance = 3,
}

export type SquidMulticallCall = {
  callType: SquidMulticallCallType
  target: Hex
  value: bigint
  callData: Hex
  payload: Hex
}
