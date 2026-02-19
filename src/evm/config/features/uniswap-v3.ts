import { EvmChainId } from '../../chain/index.js'

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
  EvmChainId.SEPOLIA,
  EvmChainId.BOBA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.SCROLL,
  EvmChainId.FILECOIN,
  EvmChainId.LINEA,
  EvmChainId.BLAST,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.MANTLE,
  EvmChainId.MANTA,
  EvmChainId.TAIKO,
  EvmChainId.GNOSIS,
  EvmChainId.SONIC,
  EvmChainId.HEMI,
  EvmChainId.PLASMA,
  EvmChainId.MONAD,
  EvmChainId.XLAYER,
  EvmChainId.MEGAETH,
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
  [EvmChainId.SEPOLIA]: POOL_INIT_CODE_HASH,
  // OKU
  [EvmChainId.SCROLL]: POOL_INIT_CODE_HASH,
  [EvmChainId.ROOTSTOCK]: POOL_INIT_CODE_HASH,
  [EvmChainId.FILECOIN]: POOL_INIT_CODE_HASH,
  [EvmChainId.BOBA]: POOL_INIT_CODE_HASH,
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
  [EvmChainId.HEMI]: POOL_INIT_CODE_HASH,
  [EvmChainId.PLASMA]: POOL_INIT_CODE_HASH,
  [EvmChainId.MONAD]: POOL_INIT_CODE_HASH,
  [EvmChainId.XLAYER]: POOL_INIT_CODE_HASH,
  [EvmChainId.MEGAETH]: POOL_INIT_CODE_HASH,
} as const

export const UNISWAP_V3_FACTORY_ADDRESS: Record<
  UniswapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ETHEREUM]: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
  [EvmChainId.POLYGON]: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
  [EvmChainId.ARBITRUM]: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
  [EvmChainId.OPTIMISM]: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
  [EvmChainId.BSC]: '0xdb1d10011ad0ff90774d0c6bb92e5c5c8b4461f7',
  [EvmChainId.CELO]: '0xafe208a311b21f13ef87e33a90049fc17a7acdec',
  [EvmChainId.BASE]: '0x33128a8fc17869897dce68ed026d694621f6fdfd',
  [EvmChainId.AVALANCHE]: '0x740b1c1de25031c31ff4fc9a62f554a55cdc1bad',
  [EvmChainId.SEPOLIA]: '0x0227628f3f023bb0b980b67d528571c95c6dac1c',
  // OKU
  [EvmChainId.SCROLL]: '0x70c62c8b8e801124a4aa81ce07b637a3e83cb919',
  [EvmChainId.ROOTSTOCK]: '0xaf37ec98a00fd63689cf3060bf3b6784e00cad82',
  [EvmChainId.FILECOIN]: '0xb4c47ed546fc31e26470a186ec2c5f19ef09ba41',
  [EvmChainId.BOBA]: '0xffcd7aed9c627e82a765c3247d562239507f6f1b',
  [EvmChainId.LINEA]: '0x31fafd4889fa1269f7a13a66ee0fb458f27d72a9',
  [EvmChainId.BLAST]: '0x792edade80af5fc680d96a2ed80a44247d2cf6fd',
  [EvmChainId.ZKSYNC_ERA]: '0x8fda5a7a8dca67bbcdd10f02fa0649a937215422',
  [EvmChainId.POLYGON_ZKEVM]: '0xff83c3c800fec21de45c5ec30b69ddd5ee60dfc2',
  [EvmChainId.MANTLE]: '0x0d922fb1bc191f64970ac40376643808b4b74df9',
  [EvmChainId.MANTA]: '0x06d830e15081f65923674268121ff57cc54e4e23',
  [EvmChainId.TAIKO]: '0x75fc67473a91335b5b8f8821277262a13b38c9b3',
  [EvmChainId.GNOSIS]: '0xe32f7dd7e3f098d518ff19a22d5f028e076489b1',
  [EvmChainId.SONIC]: '0xcb2436774c3e191c85056d248ef4260ce5f27a9d',
  [EvmChainId.HEMI]: '0x346239972d1fa486fc4a521031bc81bfb7d6e8a4',
  [EvmChainId.PLASMA]: '0xcb2436774c3e191c85056d248ef4260ce5f27a9d',
  [EvmChainId.MONAD]: '0x204faca1764b154221e35c0d20abb3c525710498',
  [EvmChainId.XLAYER]: '0x4b2ab38dbf28d31d467aa8993f6c2585981d6804',
  [EvmChainId.MEGAETH]: '0x3a5f0cd7d62452b7f899b2a5758bfa57be0de478',
} as const
