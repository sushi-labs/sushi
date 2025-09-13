import type { Address } from 'viem'
import { zeroAddress } from 'viem'
import type { EvmCurrency } from '../../../evm/currency/currency.js'
import { EvmChainId } from '../../chain/index.js'
import { EvmToken } from '../../currency/token.js'
import { WETH9, WETH9_ADDRESS } from './tokens/WETH9.js'
import { WRBTC, WRBTC_ADDRESS } from './tokens/WRBTC.js'

export const WNATIVE_ADDRESS = {
  [EvmChainId.ETHEREUM]: WETH9_ADDRESS[EvmChainId.ETHEREUM],
  [EvmChainId.SEPOLIA]: WETH9_ADDRESS[EvmChainId.SEPOLIA],
  [EvmChainId.OPTIMISM]: WETH9_ADDRESS[EvmChainId.OPTIMISM],
  [EvmChainId.ARBITRUM]: WETH9_ADDRESS[EvmChainId.ARBITRUM],
  [EvmChainId.ARBITRUM_SEPOLIA]: WETH9_ADDRESS[EvmChainId.ARBITRUM_SEPOLIA],
  [EvmChainId.FANTOM]: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  [EvmChainId.POLYGON]: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  [EvmChainId.GNOSIS]: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  [EvmChainId.BSC]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  [EvmChainId.AVALANCHE]: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
  [EvmChainId.HARMONY]: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
  [EvmChainId.CELO]: '0x471ece3750da237f93b8e339c536989b8978a438',
  [EvmChainId.KAVA]: '0xc86c7c0efbd6a49b35e8714c5f59d99de09a225b',
  [EvmChainId.METIS]: '0x75cb093e4d61d2a2e65d8e0bbb01de8d89b53481',
  [EvmChainId.ARBITRUM_NOVA]: WETH9_ADDRESS[EvmChainId.ARBITRUM_NOVA],
  [EvmChainId.BOBA]: WETH9_ADDRESS[EvmChainId.BOBA],
  [EvmChainId.BOBA_BNB]: '0xc58aad327d6d58d979882601ba8dda0685b505ea',
  [EvmChainId.BTTC]: '0x23181f21dea5936e24163ffaba4ea3b316b57f3c',
  [EvmChainId.POLYGON_ZKEVM]: WETH9_ADDRESS[EvmChainId.POLYGON_ZKEVM],
  [EvmChainId.THUNDERCORE]: '0x413cefea29f2d07b8f2acfa69d92466b9535f717',
  [EvmChainId.FILECOIN]: '0x60e1773636cf5e4a227d9ac24f20feca034ee25a',
  [EvmChainId.HAQQ]: '0xec8cc083787c6e5218d86f9ff5f28d4cc377ac54',
  [EvmChainId.CORE]: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f',
  [EvmChainId.ZKSYNC_ERA]: WETH9_ADDRESS[EvmChainId.ZKSYNC_ERA],
  [EvmChainId.LINEA]: WETH9_ADDRESS[EvmChainId.LINEA],
  [EvmChainId.BASE]: WETH9_ADDRESS[EvmChainId.BASE],
  [EvmChainId.SCROLL]: WETH9_ADDRESS[EvmChainId.SCROLL],
  [EvmChainId.ZETACHAIN]: '0x5f0b1a82749cb4e2278ec87f8bf6b618dc71a8bf',
  [EvmChainId.CRONOS]: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
  [EvmChainId.BLAST]: WETH9_ADDRESS[EvmChainId.BLAST],
  [EvmChainId.SKALE_EUROPA]: zeroAddress,
  [EvmChainId.ROOTSTOCK]: WRBTC_ADDRESS[EvmChainId.ROOTSTOCK],
  [EvmChainId.MANTLE]: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8',
  [EvmChainId.MANTA]: WETH9_ADDRESS[EvmChainId.MANTA],
  [EvmChainId.MODE]: WETH9_ADDRESS[EvmChainId.MODE],
  [EvmChainId.TAIKO]: WETH9_ADDRESS[EvmChainId.TAIKO],
  [EvmChainId.ZKLINK]: WETH9_ADDRESS[EvmChainId.ZKLINK],
  [EvmChainId.APE]: '0x48b62137edfa95a428d35c09e44256a739f6b557',
  [EvmChainId.SONIC]: '0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38',
  [EvmChainId.HEMI]: WETH9_ADDRESS[EvmChainId.HEMI],
  [EvmChainId.TATARA]: WETH9_ADDRESS[EvmChainId.TATARA],
  [EvmChainId.KATANA]: WETH9_ADDRESS[EvmChainId.KATANA],
  [EvmChainId.HYPEREVM]: WETH9_ADDRESS[EvmChainId.HYPEREVM],
  [EvmChainId.BERACHAIN]: '0x6969696969696969696969696969696969696969',
} as const satisfies Record<EvmChainId, Address>

export const WNATIVE = {
  [EvmChainId.ETHEREUM]: WETH9[EvmChainId.ETHEREUM],
  [EvmChainId.SEPOLIA]: WETH9[EvmChainId.SEPOLIA],
  [EvmChainId.OPTIMISM]: WETH9[EvmChainId.OPTIMISM],
  [EvmChainId.FANTOM]: new EvmToken({
    chainId: EvmChainId.FANTOM,
    address: WNATIVE_ADDRESS[EvmChainId.FANTOM],
    decimals: 18,
    symbol: 'WFTM',
    name: 'Wrapped FTM',
  }),
  [EvmChainId.POLYGON]: new EvmToken({
    chainId: EvmChainId.POLYGON,
    address: WNATIVE_ADDRESS[EvmChainId.POLYGON],
    decimals: 18,
    symbol: 'WPOL',
    name: 'Wrapped POL',
  }),
  [EvmChainId.GNOSIS]: new EvmToken({
    chainId: EvmChainId.GNOSIS,
    address: WNATIVE_ADDRESS[EvmChainId.GNOSIS],
    decimals: 18,
    symbol: 'WXDAI',
    name: 'Wrapped xDai',
  }),
  [EvmChainId.BSC]: new EvmToken({
    chainId: EvmChainId.BSC,
    address: WNATIVE_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  }),
  [EvmChainId.ARBITRUM]: WETH9[EvmChainId.ARBITRUM],
  [EvmChainId.ARBITRUM_SEPOLIA]: WETH9[EvmChainId.ARBITRUM_SEPOLIA],
  [EvmChainId.ARBITRUM_NOVA]: WETH9[EvmChainId.ARBITRUM_NOVA],
  [EvmChainId.AVALANCHE]: new EvmToken({
    chainId: EvmChainId.AVALANCHE,
    address: WNATIVE_ADDRESS[EvmChainId.AVALANCHE],
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped AVAX',
  }),
  [EvmChainId.HARMONY]: new EvmToken({
    chainId: EvmChainId.HARMONY,
    address: WNATIVE_ADDRESS[EvmChainId.HARMONY],
    decimals: 18,
    symbol: 'WONE',
    name: 'Wrapped ONE',
  }),
  [EvmChainId.CELO]: new EvmToken({
    chainId: EvmChainId.CELO,
    address: WNATIVE_ADDRESS[EvmChainId.CELO],
    decimals: 18,
    symbol: 'CELO',
    name: 'Celo',
  }),
  [EvmChainId.KAVA]: new EvmToken({
    chainId: EvmChainId.KAVA,
    address: WNATIVE_ADDRESS[EvmChainId.KAVA],
    decimals: 18,
    symbol: 'WKAVA',
    name: 'Wrapped Kava',
  }),
  [EvmChainId.METIS]: new EvmToken({
    chainId: EvmChainId.METIS,
    address: WNATIVE_ADDRESS[EvmChainId.METIS],
    decimals: 18,
    symbol: 'WMETIS',
    name: 'Wrapped Metis',
  }),
  [EvmChainId.BOBA]: WETH9[EvmChainId.BOBA],
  [EvmChainId.BOBA_BNB]: new EvmToken({
    chainId: EvmChainId.BOBA_BNB,
    address: WNATIVE_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'WBOBA',
    name: 'Wrapped Boba',
  }),
  [EvmChainId.BTTC]: new EvmToken({
    chainId: EvmChainId.BTTC,
    address: WNATIVE_ADDRESS[EvmChainId.BTTC],
    decimals: 18,
    symbol: 'WBTT',
    name: 'Wrapped BitTorrent Token',
  }),
  // [EvmChainId.SEPOLIA]: WETH9[EvmChainId.SEPOLIA],
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: WETH9[EvmChainId.CONSENSUS_ZKEVM_TESTNET],
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: WETH9[EvmChainId.SCROLL_ALPHA_TESTNET],
  // [EvmChainId.BASE_TESTNET]: WETH9[EvmChainId.BASE_TESTNET],
  [EvmChainId.THUNDERCORE]: new EvmToken({
    chainId: EvmChainId.THUNDERCORE,
    address: WNATIVE_ADDRESS[EvmChainId.THUNDERCORE],
    decimals: 18,
    symbol: 'WTT',
    name: 'Wrapped Thunder Token',
  }),
  [EvmChainId.POLYGON_ZKEVM]: WETH9[EvmChainId.POLYGON_ZKEVM],
  [EvmChainId.HAQQ]: new EvmToken({
    chainId: EvmChainId.HAQQ,
    address: WNATIVE_ADDRESS[EvmChainId.HAQQ],
    decimals: 18,
    symbol: 'WISLM',
    name: 'Wrapped Islamic Coin',
  }),
  [EvmChainId.CORE]: new EvmToken({
    chainId: EvmChainId.CORE,
    address: WNATIVE_ADDRESS[EvmChainId.CORE],
    decimals: 18,
    symbol: 'WCORE',
    name: 'Wrapped Core',
  }),
  [EvmChainId.ZKSYNC_ERA]: WETH9[EvmChainId.ZKSYNC_ERA],
  [EvmChainId.LINEA]: WETH9[EvmChainId.LINEA],
  [EvmChainId.BASE]: WETH9[EvmChainId.BASE],
  [EvmChainId.SCROLL]: WETH9[EvmChainId.SCROLL],
  [EvmChainId.FILECOIN]: new EvmToken({
    chainId: EvmChainId.FILECOIN,
    address: WNATIVE_ADDRESS[EvmChainId.FILECOIN],
    decimals: 18,
    symbol: 'WFIL',
    name: 'Wrapped FIL',
  }),
  [EvmChainId.ZETACHAIN]: new EvmToken({
    chainId: EvmChainId.ZETACHAIN,
    address: WNATIVE_ADDRESS[EvmChainId.ZETACHAIN],
    decimals: 18,
    symbol: 'WZETA',
    name: 'Wrapped ZETA',
  }),
  [EvmChainId.CRONOS]: new EvmToken({
    chainId: EvmChainId.CRONOS,
    address: WNATIVE_ADDRESS[EvmChainId.CRONOS],
    decimals: 18,
    symbol: 'WCRO',
    name: 'Wrapped CRO',
  }),
  [EvmChainId.BLAST]: WETH9[EvmChainId.BLAST],
  [EvmChainId.SKALE_EUROPA]: new EvmToken({
    // Skale Europa does not have a wrapped native token, using zero address
    chainId: EvmChainId.SKALE_EUROPA,
    address: WNATIVE_ADDRESS[EvmChainId.SKALE_EUROPA],
    decimals: 0,
    symbol: 'WsFUEL',
    name: 'Wrapped sFUEL',
  }),
  [EvmChainId.ROOTSTOCK]: WRBTC[EvmChainId.ROOTSTOCK],
  [EvmChainId.MANTLE]: new EvmToken({
    chainId: EvmChainId.MANTLE,
    address: WNATIVE_ADDRESS[EvmChainId.MANTLE],
    decimals: 18,
    symbol: 'WMNT',
    name: 'Wrapped MNT',
  }),
  [EvmChainId.MANTA]: WETH9[EvmChainId.MANTA],
  [EvmChainId.MODE]: WETH9[EvmChainId.MODE],
  [EvmChainId.TAIKO]: WETH9[EvmChainId.TAIKO],
  [EvmChainId.ZKLINK]: WETH9[EvmChainId.ZKLINK],
  [EvmChainId.APE]: new EvmToken({
    chainId: EvmChainId.APE,
    address: WNATIVE_ADDRESS[EvmChainId.APE],
    decimals: 18,
    symbol: 'WAPE',
    name: 'Wrapped Ape',
  }),
  [EvmChainId.SONIC]: new EvmToken({
    chainId: EvmChainId.SONIC,
    address: WNATIVE_ADDRESS[EvmChainId.SONIC],
    decimals: 18,
    symbol: 'wS',
    name: 'Wrapped Sonic',
  }),
  [EvmChainId.HEMI]: WETH9[EvmChainId.HEMI],
  [EvmChainId.TATARA]: WETH9[EvmChainId.TATARA],
  [EvmChainId.KATANA]: WETH9[EvmChainId.KATANA],
  [EvmChainId.HYPEREVM]: new EvmToken({
    chainId: EvmChainId.HYPEREVM,
    address: WNATIVE_ADDRESS[EvmChainId.HYPEREVM],
    decimals: 18,
    symbol: 'WHYPE',
    name: 'Wrapped HYPE',
  }),
  [EvmChainId.BERACHAIN]: new EvmToken({
    chainId: EvmChainId.BERACHAIN,
    address: WNATIVE_ADDRESS[EvmChainId.BERACHAIN],
    decimals: 18,
    symbol: 'WBERA',
    name: 'Wrapped BERA',
  }),
} as const satisfies Record<EvmChainId, EvmToken>

export const isWNativeSupported = (chainId: EvmChainId) =>
  WNATIVE_ADDRESS[chainId] !== zeroAddress

export function isWrapOrUnwrap({
  from,
  to,
}: {
  from: EvmCurrency
  to: EvmCurrency
}): boolean {
  if (from.type === 'native' && from.wrap().isSame(to)) {
    return true
  }

  return to.type === 'native' && to.wrap().isSame(from)
}
