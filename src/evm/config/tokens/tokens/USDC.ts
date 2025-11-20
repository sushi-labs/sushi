import { EvmChainId } from '../../../chain/index.js'
import { EvmToken } from '../../../currency/token.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlUSDC_ADDRESS } from './axlUSDC.js'

export const USDC_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [EvmChainId.SEPOLIA]: '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238',
  [EvmChainId.POLYGON]: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
  [EvmChainId.BSC]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  [EvmChainId.HARMONY]: '0x985458e523db3d53125813ed68c274899e9dfab4',
  [EvmChainId.GNOSIS]: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
  [EvmChainId.ARBITRUM]: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
  [EvmChainId.AVALANCHE]: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  [EvmChainId.CELO]: '0xceba9300f2b948710d2653dd7b07f33a8b32118c',
  [EvmChainId.OPTIMISM]: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  [EvmChainId.METIS]: '0xea32a96608495e54156ae48931a7c20f0dcc1a21',
  [EvmChainId.ARBITRUM_NOVA]: '0x750ba8b76187092b0d1e87e28daaf484d1b5273b',
  [EvmChainId.BOBA]: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
  [EvmChainId.BOBA_BNB]: '0x9f98f9f312d23d078061962837042b8918e6aff2',
  [EvmChainId.BTTC]: '0xae17940943ba9440540940db0f1877f101d39e8b', // USDC.e
  [EvmChainId.POLYGON_ZKEVM]: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
  [EvmChainId.THUNDERCORE]: '0x22e89898a04eaf43379beb70bf4e38b1faf8a31e',
  [EvmChainId.CORE]: '0xa4151b2b3e269645181dccf2d426ce75fcbdeca9',
  [EvmChainId.HAQQ]: axlUSDC_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4', // USDC.e
  [EvmChainId.LINEA]: '0x176211869ca2b568f2a7d4ee941e073a821ee1ff',
  [EvmChainId.BASE]: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  [EvmChainId.SCROLL]: '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4',
  [EvmChainId.FILECOIN]: axlUSDC_ADDRESS[EvmChainId.FILECOIN],
  [EvmChainId.ZETACHAIN]: '0x0cbe0df132a6c6b4a2974fa1b7fb953cf0cc798a',
  [EvmChainId.CRONOS]: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
  [EvmChainId.SKALE_EUROPA]: '0x5f795bb52dac3085f578f4877d450e2929d2f13d',
  [EvmChainId.ROOTSTOCK]: '0x1bda44fda023f2af8280a16fd1b01d1a493ba6c4',
  [EvmChainId.MANTLE]: '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9',
  [EvmChainId.MANTA]: '0xb73603c5d87fa094b7314c74ace2e64d165016fb',
  [EvmChainId.MODE]: '0xd988097fb8612cc24eec14542bc03424c656005f',
  [EvmChainId.TAIKO]: '0x07d83526730c7438048d55a4fc0b850e2aab6f0b',
  [EvmChainId.ZKLINK]: '0x1a1a3b2ff016332e866787b311fcb63928464509',
  [EvmChainId.SONIC]: '0x29219dd400f2bf60e5a23d13be72b486d4038894',
  [EvmChainId.HEMI]: '0xad11a8beb98bbf61dbb1aa0f6d6f2ecd87b35afa',
  [EvmChainId.KATANA]: '0x203a662b0bd271a6ed5a60edfbd04bfce608fd36',
  [EvmChainId.BERACHAIN]: '0x549943e04f40284185054145c6e4e9568c1d3241',
  [EvmChainId.FUSE]: '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
  [EvmChainId.BOKUTO]: '0xc2a4c310f2512a17ac0047cf871acaed3e62bb4b',
  [EvmChainId.MONAD]: '0x754704bc059f8c67012fed69bc8a327a5aafb603',
  [EvmChainId.PLUME]: '0x222365ef19f7947e5484218551b56bb3965aa7af',
} as const

export const USDC = {
  ...addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    USDC_ADDRESS,
  ),
  [EvmChainId.BSC]: new EvmToken({
    chainId: EvmChainId.BSC,
    address: USDC_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [EvmChainId.BOBA_BNB]: new EvmToken({
    chainId: EvmChainId.BOBA_BNB,
    address: USDC_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [EvmChainId.ROOTSTOCK]: new EvmToken({
    chainId: EvmChainId.ROOTSTOCK,
    address: USDC_ADDRESS[EvmChainId.ROOTSTOCK],
    decimals: 18,
    symbol: 'rUSDC',
    name: 'rUSDC',
  }),
} as const

export const STARGATE_USDC_ADDRESS = {
  [EvmChainId.FANTOM]: '0x28a92dde19d9989f39a49905d7c9c2fac7799bdf',
  [EvmChainId.PLUME]: '0x78add880a697070c1e765ac44d65323a0dcce913',
} as const

export const STARGATE_USDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'stgUSDC',
    name: 'Stargate USDC',
    origin: 'stargate',
  },
  STARGATE_USDC_ADDRESS,
)
