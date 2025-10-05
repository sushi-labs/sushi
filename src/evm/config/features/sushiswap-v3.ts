import type { Address } from 'viem'
import { EvmChainId } from '../../chain/index.js'

const POOL_INIT_CODE_HASH =
  '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */

export enum SushiSwapV3FeeAmount {
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
export const TICK_SPACINGS: { [_amount in SushiSwapV3FeeAmount]: number } = {
  [SushiSwapV3FeeAmount.LOWEST]: 1,
  [SushiSwapV3FeeAmount.LOW]: 10,
  [SushiSwapV3FeeAmount.MEDIUM]: 60,
  [SushiSwapV3FeeAmount.HIGH]: 200,
}

// SUSHISWAP
export const SUSHISWAP_V3_FACTORY_ADDRESS: Record<
  SushiSwapV3ChainId | DeprecatedSushiSwapV3ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM_NOVA]: '0xaa26771d497814e81d305c511efbb3ced90bf5bd',
  [EvmChainId.ARBITRUM]: '0x1af415a1eba07a4986a52b6f2e7de7003d82231e',
  [EvmChainId.AVALANCHE]: '0x3e603c14af37ebdad31709c4f848fc6ad5bec715',
  [EvmChainId.BSC]: '0x126555dd55a39328f69400d6ae4f782bd4c34abb',
  [EvmChainId.BTTC]: '0xbbde1d67297329148fe1ed5e6b00114842728e65',
  [EvmChainId.ETHEREUM]: '0xbaceb8ec6b9355dfc0269c18bac9d6e2bdc29c4f',
  [EvmChainId.FANTOM]: '0x7770978eed668a3ba661d51a773d3a992fc9ddcb',
  [EvmChainId.GNOSIS]: '0xf78031cbca409f2fb6876bdfdbc1b2df24cf9bef',
  [EvmChainId.KAVA]: '0x1e9b24073183d5c6b7ae5fb4b8f0b1dd83fdc77a',
  [EvmChainId.METIS]: '0x145d82bca93cca2ae057d1c6f26245d1b9522e6f',
  [EvmChainId.OPTIMISM]: '0x9c6522117e2ed1fe5bdb72bb0ed5e3f2bde7dbe0',
  [EvmChainId.POLYGON]: '0x917933899c6a5f8e37f31e19f92cdbff7e8ff0e2',
  [EvmChainId.BOBA]: '0x0be808376ecb75a5cf9bb6d237d16cd37893d904',
  [EvmChainId.POLYGON_ZKEVM]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.THUNDERCORE]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.HAQQ]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.CORE]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.LINEA]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.BASE]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.SCROLL]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
  [EvmChainId.FILECOIN]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.ZETACHAIN]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.BLAST]: '0x7680d4b43f3d1d54d6cfeeb2169463bfa7a6cf0d',
  [EvmChainId.SKALE_EUROPA]: '0x51d15889b66a2c919dbbd624d53b47a9e8fec4bb',
  [EvmChainId.ROOTSTOCK]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
  [EvmChainId.SONIC]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
  [EvmChainId.HEMI]: '0xcdbcd51a5e8728e0af4895ce5771b7d17ff71959',
  [EvmChainId.TATARA]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.KATANA]: '0x203e8740894c8955cb8950759876d7e7e45e04c1',
  [EvmChainId.SEPOLIA]: '0x1f2fcf1d036b375b384012e61d3aa33f8c256bbe',
} as const

export const SUSHISWAP_V3_INIT_CODE_HASH: Record<
  SushiSwapV3ChainId | DeprecatedSushiSwapV3ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM_NOVA]: POOL_INIT_CODE_HASH,
  [EvmChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.AVALANCHE]: POOL_INIT_CODE_HASH,
  [EvmChainId.BSC]: POOL_INIT_CODE_HASH,
  [EvmChainId.BTTC]: POOL_INIT_CODE_HASH,
  [EvmChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.FANTOM]: POOL_INIT_CODE_HASH,
  [EvmChainId.GNOSIS]: POOL_INIT_CODE_HASH,
  [EvmChainId.KAVA]: POOL_INIT_CODE_HASH,
  [EvmChainId.METIS]: POOL_INIT_CODE_HASH,
  [EvmChainId.OPTIMISM]: POOL_INIT_CODE_HASH,
  [EvmChainId.POLYGON]: POOL_INIT_CODE_HASH,
  [EvmChainId.BOBA]: POOL_INIT_CODE_HASH,
  [EvmChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
  [EvmChainId.THUNDERCORE]: POOL_INIT_CODE_HASH,
  [EvmChainId.HAQQ]: POOL_INIT_CODE_HASH,
  [EvmChainId.CORE]: POOL_INIT_CODE_HASH,
  [EvmChainId.LINEA]: POOL_INIT_CODE_HASH,
  [EvmChainId.BASE]: POOL_INIT_CODE_HASH,
  [EvmChainId.SCROLL]: POOL_INIT_CODE_HASH,
  [EvmChainId.FILECOIN]: POOL_INIT_CODE_HASH,
  [EvmChainId.ZETACHAIN]: POOL_INIT_CODE_HASH,
  [EvmChainId.BLAST]:
    '0x8e13daee7f5a62e37e71bf852bcd44e7d16b90617ed2b17c24c2ee62411c5bae',
  [EvmChainId.SKALE_EUROPA]: POOL_INIT_CODE_HASH,
  [EvmChainId.ROOTSTOCK]: POOL_INIT_CODE_HASH,
  [EvmChainId.SONIC]: POOL_INIT_CODE_HASH,
  [EvmChainId.HEMI]: POOL_INIT_CODE_HASH,
  [EvmChainId.TATARA]: POOL_INIT_CODE_HASH,
  [EvmChainId.KATANA]:
    '0xe040f12c7cee3904b78f24f8fc395629c2e69525c2815da7a659f7483e378ecb',
  [EvmChainId.SEPOLIA]: POOL_INIT_CODE_HASH,
} as const

export const SUSHISWAP_V3_POSITION_MANAGER: Record<
  SushiSwapV3ChainId | DeprecatedSushiSwapV3ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM_NOVA]: '0x258f7e97149afd7d7f84fa63b10e4a3f0c38b788',
  [EvmChainId.ARBITRUM]: '0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49',
  [EvmChainId.AVALANCHE]: '0x18350b048ab366ed601ffdbc669110ecb36016f3',
  [EvmChainId.BSC]: '0xf70c086618dcf2b1a461311275e00d6b722ef914',
  [EvmChainId.BTTC]: '0x57bffa72db682f7eb6c132dae03ff36bbeb0c459',
  [EvmChainId.ETHEREUM]: '0x2214a42d8e2a1d20635c2cb0664422c528b6a432',
  [EvmChainId.FANTOM]: '0x10c19390e1ac2fd6d0c3643a2320b0aba38e5baa',
  [EvmChainId.GNOSIS]: '0xab235da7f52d35fb4551afba11bfb56e18774a65',
  [EvmChainId.KAVA]: '0xbf3b71decbcefabb3210b9d8f18ec22e0556f5f0',
  [EvmChainId.METIS]: '0x630be2985674d31920babb4f96657960f131e7b1',
  [EvmChainId.OPTIMISM]: '0x1af415a1eba07a4986a52b6f2e7de7003d82231e',
  [EvmChainId.POLYGON]: '0xb7402ee99f0a008e461098ac3a27f4957df89a40',
  [EvmChainId.BOBA]: '0x1b9d177ccdea3c79b6c8f40761fc8dc9d0500eaa',
  [EvmChainId.POLYGON_ZKEVM]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.THUNDERCORE]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.HAQQ]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  [EvmChainId.CORE]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.LINEA]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  [EvmChainId.BASE]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  [EvmChainId.SCROLL]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
  [EvmChainId.FILECOIN]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.ZETACHAIN]: '0xcdbcd51a5e8728e0af4895ce5771b7d17ff71959',
  [EvmChainId.BLAST]: '0x51edb3e5bce8618b77b60215f84ad3db14709051',
  [EvmChainId.SKALE_EUROPA]: '0xa4d2268f145cd5c835115441b877295c46f25b9b',
  [EvmChainId.ROOTSTOCK]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
  [EvmChainId.SONIC]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
  [EvmChainId.HEMI]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
  [EvmChainId.TATARA]: '0x1400fefd6f9b897970f00df6237ff2b8b27dc82c',
  [EvmChainId.KATANA]: '0x2659c6085d26144117d904c46b48b6d180393d27',
  [EvmChainId.SEPOLIA]: '0x544ba588efd839d2692fc31ea991cd39993c135f',
} as const

export const SUSHISWAP_V3_TICK_LENS: Record<
  SushiSwapV3ChainId | DeprecatedSushiSwapV3ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM_NOVA]: '0xf60e5f4a44a510742457d8064ffd360b12d8d9af',
  [EvmChainId.ARBITRUM]: '0x8516944e89f296eb6473d79aed1ba12088016c9e',
  [EvmChainId.AVALANCHE]: '0xddc1b5920723f774d2ec2c3c9355251a20819776',
  [EvmChainId.BSC]: '0x10c19390e1ac2fd6d0c3643a2320b0aba38e5baa',
  [EvmChainId.BTTC]: '0x1400fefd6f9b897970f00df6237ff2b8b27dc82c',
  [EvmChainId.ETHEREUM]: '0xfb70ad5a200d784e7901230e6875d91d5fa6b68c',
  [EvmChainId.FANTOM]: '0xd75f5369724b513b497101fb15211160c1d96550',
  [EvmChainId.GNOSIS]: '0xaa26771d497814e81d305c511efbb3ced90bf5bd',
  [EvmChainId.KAVA]: '0xa62ec622dba415aa94110739b1f951b1202cf322',
  [EvmChainId.METIS]: '0x078047150f8efa223b3d407f00e462e38f4b1b9c',
  [EvmChainId.OPTIMISM]: '0x0367a647a68f304f2a6e453c25033a4249d7f2c6',
  [EvmChainId.POLYGON]: '0x9fdea1412e50d78b25ace4f96d35801647fdf7da',
  [EvmChainId.BOBA]: '0x9b3ff703fa9c8b467f5886d7b61e61ba07a9b51c',
  [EvmChainId.POLYGON_ZKEVM]: '0x0be808376ecb75a5cf9bb6d237d16cd37893d904',
  [EvmChainId.THUNDERCORE]: '0x0be808376ecb75a5cf9bb6d237d16cd37893d904',
  [EvmChainId.HAQQ]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.CORE]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.LINEA]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.BASE]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.SCROLL]: '0x1f2fcf1d036b375b384012e61d3aa33f8c256bbe',
  [EvmChainId.FILECOIN]: '0x1be211d8da40bc0ae8719c6663307bfc987b1d6c',
  [EvmChainId.ZETACHAIN]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
  [EvmChainId.BLAST]: '0x039e87ab90205f9d87c5b40d4b28e2be45da4a20',
  [EvmChainId.SKALE_EUROPA]: '0x65a7158be70a1270b01713910db7cbfe8d60ff4d',
  [EvmChainId.ROOTSTOCK]: '0x33d91116e0370970444b0281ab117e161febfcdd',
  [EvmChainId.SONIC]: '0x33d91116e0370970444b0281ab117e161febfcdd',
  [EvmChainId.HEMI]: '0x1f2fcf1d036b375b384012e61d3aa33f8c256bbe',
  [EvmChainId.TATARA]: '0xb46e319390de313b8cc95ea5aa30c7bbfd79da94',
  [EvmChainId.KATANA]: '0x35dc3e13469e980c37b6f288bbb9822b1f9bd435',
  [EvmChainId.SEPOLIA]: '0xc3ec4e1511c6935ed2f92b9a61881a1b95bb1566',
} as const

export const SUSHISWAP_V3_QUOTER: Record<
  SushiSwapV3ChainId | DeprecatedSushiSwapV3ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM_NOVA]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.ARBITRUM]: '0x0524e833ccd057e4d7a296e3aaab9f7675964ce1',
  [EvmChainId.AVALANCHE]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.BSC]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.BTTC]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
  [EvmChainId.ETHEREUM]: '0x64e8802fe490fa7cc61d3463958199161bb608a7',
  [EvmChainId.FANTOM]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.GNOSIS]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.KAVA]: '0x5abedac449a8301467c3e124b98e7151641f1e56',
  [EvmChainId.METIS]: '0xfbc12984689e5f15626bad03ad60160fe98b303c',
  [EvmChainId.OPTIMISM]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.POLYGON]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.BOBA]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.POLYGON_ZKEVM]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.THUNDERCORE]: '0x49244385bd56f557ce5201d8504c6d7f42da8ef6',
  [EvmChainId.HAQQ]: '0x734583f62bb6ace3c9ba9bd5a53143ca2ce8c55a',
  [EvmChainId.CORE]: '0x640129e6b5c31b3b12640a5b39fecdca9f81c640',
  [EvmChainId.LINEA]: '0xfb7ef66a7e61224dd6fcd0d7d9c3be5c8b049b9f',
  [EvmChainId.BASE]: '0xb1e835dc2785b52265711e17fccb0fd018226a6e',
  [EvmChainId.SCROLL]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
  [EvmChainId.FILECOIN]: '0x9b3ff703fa9c8b467f5886d7b61e61ba07a9b51c',
  [EvmChainId.ZETACHAIN]: '0x57bffa72db682f7eb6c132dae03ff36bbeb0c459',
  [EvmChainId.BLAST]: '0xd93a91442afd80243cf12f7110f48ab276fff33f',
  [EvmChainId.SKALE_EUROPA]: '0x25281328d69fd3452d16ffab96e5edd1c0a0ac43',
  [EvmChainId.ROOTSTOCK]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
  [EvmChainId.SONIC]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
  [EvmChainId.HEMI]: '0x1400fefd6f9b897970f00df6237ff2b8b27dc82c',
  [EvmChainId.TATARA]: '0x33d91116e0370970444b0281ab117e161febfcdd',
  [EvmChainId.KATANA]: '0x92dea23ed1c683940ff1a2f8fe23fe98c5d3041c',
  [EvmChainId.SEPOLIA]: '0x039e87ab90205f9d87c5b40d4b28e2be45da4a20',
} as const

export const SUSHISWAP_V3_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM_NOVA,
  EvmChainId.ARBITRUM,
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
  EvmChainId.BTTC,
  EvmChainId.ETHEREUM,
  EvmChainId.FANTOM,
  EvmChainId.GNOSIS,
  EvmChainId.OPTIMISM,
  EvmChainId.POLYGON,
  EvmChainId.BOBA,
  EvmChainId.THUNDERCORE,
  EvmChainId.HAQQ,
  EvmChainId.CORE,
  EvmChainId.LINEA,
  EvmChainId.BASE,
  EvmChainId.SCROLL,
  EvmChainId.KAVA,
  EvmChainId.METIS,
  EvmChainId.FILECOIN,
  EvmChainId.ZETACHAIN,
  EvmChainId.BLAST,
  EvmChainId.SKALE_EUROPA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.SONIC,
  EvmChainId.HEMI,
  EvmChainId.TATARA,
  EvmChainId.KATANA,
  EvmChainId.SEPOLIA,
] as const

export const SushiSwapV3ChainIds = SUSHISWAP_V3_SUPPORTED_CHAIN_IDS

export type SushiSwapV3ChainId =
  (typeof SUSHISWAP_V3_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV3ChainId = (
  chainId: number,
): chainId is SushiSwapV3ChainId =>
  SUSHISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV3ChainId)

export const DEPRECATED_SUSHISWAP_V3_CHAIN_IDS = [
  EvmChainId.POLYGON_ZKEVM,
] as const

export const DeprecatedSushiSwapV3ChainIds = DEPRECATED_SUSHISWAP_V3_CHAIN_IDS

export type DeprecatedSushiSwapV3ChainId =
  (typeof DEPRECATED_SUSHISWAP_V3_CHAIN_IDS)[number]

export const isDeprecatedSushiSwapV3ChainId = (
  chainId: EvmChainId,
): chainId is DeprecatedSushiSwapV3ChainId =>
  DEPRECATED_SUSHISWAP_V3_CHAIN_IDS.includes(
    chainId as DeprecatedSushiSwapV3ChainId,
  )
