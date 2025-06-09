import { EvmChainId } from '~evm/chain/index.js'
import { EvmToken } from '~evm/currency/token.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlUSDC_ADDRESS } from './axlUSDC.js'

export const USDC_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [EvmChainId.SEPOLIA]: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
  [EvmChainId.POLYGON]: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
  [EvmChainId.BSC]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  [EvmChainId.HARMONY]: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
  [EvmChainId.GNOSIS]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
  [EvmChainId.ARBITRUM]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  [EvmChainId.AVALANCHE]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  [EvmChainId.CELO]: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
  [EvmChainId.OPTIMISM]: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
  [EvmChainId.METIS]: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
  [EvmChainId.ARBITRUM_NOVA]: '0x750ba8b76187092B0D1E87E28daaf484d1b5273b',
  [EvmChainId.BOBA]: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc',
  [EvmChainId.BOBA_BNB]: '0x9F98f9F312D23d078061962837042b8918e6aff2',
  [EvmChainId.BTTC]: '0xAE17940943BA9440540940DB0F1877f101D39e8b', // USDC.e
  [EvmChainId.POLYGON_ZKEVM]: '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035',
  [EvmChainId.THUNDERCORE]: '0x22e89898A04eaf43379BeB70bf4E38b1faf8A31e',
  [EvmChainId.CORE]: '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9',
  [EvmChainId.HAQQ]: axlUSDC_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', // USDC.e
  [EvmChainId.LINEA]: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
  [EvmChainId.BASE]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  [EvmChainId.SCROLL]: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
  [EvmChainId.FILECOIN]: axlUSDC_ADDRESS[EvmChainId.FILECOIN],
  [EvmChainId.ZETACHAIN]: '0x0cbe0dF132a6c6B4a2974Fa1b7Fb953CF0Cc798a',
  [EvmChainId.CRONOS]: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  [EvmChainId.SKALE_EUROPA]: '0x5F795bb52dAC3085f578f4877D450e2929D2F13d',
  [EvmChainId.ROOTSTOCK]: '0x1BDA44fda023f2aF8280A16FD1b01d1a493BA6C4',
  [EvmChainId.MANTLE]: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
  [EvmChainId.MANTA]: '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
  [EvmChainId.MODE]: '0xd988097fb8612cc24eeC14542bC03424c656005f',
  [EvmChainId.TAIKO]: '0x07d83526730c7438048D55A4fc0b850e2aaB6f0b',
  [EvmChainId.ZKLINK]: '0x1a1A3b2ff016332e866787B311fcB63928464509',
  [EvmChainId.SONIC]: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
  [EvmChainId.HEMI]: '0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA',
  [EvmChainId.KATANA]: '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36',
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
  [EvmChainId.FANTOM]: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
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
