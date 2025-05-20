import { EvmChainId } from '../../chain/evm/index.js'

const POOL_INIT_CODE_HASH =
  '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */

export enum UniswapV3FeeAmount {
  /** 0.01% */
  LOWEST = 100,
  /** 0.1% */
  LOW = 500,
  /** 0.3% */
  MEDIUM = 3000,
  /** 1% */
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const UNISWAP_V3_TICK_SPACINGS: {
  [_amount in UniswapV3FeeAmount]: number
} = {
  [UniswapV3FeeAmount.LOWEST]: 1,
  [UniswapV3FeeAmount.LOW]: 10,
  [UniswapV3FeeAmount.MEDIUM]: 60,
  [UniswapV3FeeAmount.HIGH]: 200,
}

export const UNISWAP_V3_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.BSC,
  EvmChainId.CELO,
  EvmChainId.ETHEREUM,
  EvmChainId.OPTIMISM,
  EvmChainId.POLYGON,
  EvmChainId.BASE,
  EvmChainId.AVALANCHE,
  // OKU
  EvmChainId.BOBA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.SCROLL,
  EvmChainId.FILECOIN,
  EvmChainId.MOONBEAM,
  EvmChainId.LINEA,
  EvmChainId.BLAST,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.MANTLE,
  EvmChainId.MANTA,
  EvmChainId.TAIKO,
  EvmChainId.GNOSIS,
  EvmChainId.SONIC,
  EvmChainId.TELOS,
  EvmChainId.HEMI,
] as const

export const UniswapV3ChainIds = UNISWAP_V3_SUPPORTED_CHAIN_IDS

export type UniswapV3ChainId = (typeof UNISWAP_V3_SUPPORTED_CHAIN_IDS)[number]

export const isUniswapV3ChainId = (
  chainId: EvmChainId,
): chainId is UniswapV3ChainId =>
  UNISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId as UniswapV3ChainId)

export const UNISWAP_V3_INIT_CODE_HASH: Record<
  UniswapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.POLYGON]: POOL_INIT_CODE_HASH,
  [EvmChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.OPTIMISM]: POOL_INIT_CODE_HASH,
  [EvmChainId.BSC]: POOL_INIT_CODE_HASH,
  [EvmChainId.CELO]: POOL_INIT_CODE_HASH,
  [EvmChainId.BASE]: POOL_INIT_CODE_HASH,
  [EvmChainId.AVALANCHE]: POOL_INIT_CODE_HASH,
  // OKU
  [EvmChainId.SCROLL]: POOL_INIT_CODE_HASH,
  [EvmChainId.ROOTSTOCK]: POOL_INIT_CODE_HASH,
  [EvmChainId.FILECOIN]: POOL_INIT_CODE_HASH,
  [EvmChainId.BOBA]: POOL_INIT_CODE_HASH,
  [EvmChainId.MOONBEAM]: POOL_INIT_CODE_HASH,
  [EvmChainId.LINEA]: POOL_INIT_CODE_HASH,
  [EvmChainId.BLAST]: POOL_INIT_CODE_HASH,
  [EvmChainId.ZKSYNC_ERA]:
    '0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed',
  [EvmChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
  [EvmChainId.MANTLE]: POOL_INIT_CODE_HASH,
  [EvmChainId.MANTA]: POOL_INIT_CODE_HASH,
  [EvmChainId.TAIKO]: POOL_INIT_CODE_HASH,
  [EvmChainId.GNOSIS]: POOL_INIT_CODE_HASH,
  [EvmChainId.SONIC]: POOL_INIT_CODE_HASH,
  [EvmChainId.TELOS]: POOL_INIT_CODE_HASH,
  [EvmChainId.HEMI]: POOL_INIT_CODE_HASH,
} as const

export const UNISWAP_V3_FACTORY_ADDRESS: Record<
  UniswapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ETHEREUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [EvmChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [EvmChainId.ARBITRUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [EvmChainId.OPTIMISM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [EvmChainId.BSC]: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
  [EvmChainId.CELO]: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
  [EvmChainId.BASE]: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
  [EvmChainId.AVALANCHE]: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
  // OKU
  [EvmChainId.SCROLL]: '0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919',
  [EvmChainId.ROOTSTOCK]: '0xaF37EC98A00FD63689CF3060BF3B6784E00caD82',
  [EvmChainId.FILECOIN]: '0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41',
  [EvmChainId.BOBA]: '0xFFCd7Aed9C627E82A765c3247d562239507f6f1B',
  [EvmChainId.MOONBEAM]: '0x28f1158795A3585CaAA3cD6469CD65382b89BB70',
  [EvmChainId.LINEA]: '0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9',
  [EvmChainId.BLAST]: '0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd',
  [EvmChainId.ZKSYNC_ERA]: '0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422',
  [EvmChainId.POLYGON_ZKEVM]: '0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2',
  [EvmChainId.MANTLE]: '0x0d922Fb1Bc191F64970ac40376643808b4B74Df9',
  [EvmChainId.MANTA]: '0x06D830e15081f65923674268121FF57Cc54e4e23',
  [EvmChainId.TAIKO]: '0x75FC67473A91335B5b8F8821277262a13B38c9b3',
  [EvmChainId.GNOSIS]: '0xe32F7dD7e3f098D518ff19A22d5f028e076489B1',
  [EvmChainId.SONIC]: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  [EvmChainId.TELOS]: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  [EvmChainId.HEMI]: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
} as const
