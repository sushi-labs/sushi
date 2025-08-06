import { EvmChainId, type BladeChainId, type EvmAddress } from 'sushi/evm'

// Blade Pool addresses by chain (multiple pools per chain)
export const BLADE_POOL_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x655eDCE464CC797526600a462A8154650EEe4B77', // ClipperApproximateCaravelExchange
    '0xe7b0ce0526fbe3969035a145c9e9691d4d9d216c', // ClipperVerifiedCaravelExchange
    '0xcc12532e95c2a6a4c53af153b9b739a3cc9218a7', // ClipperCaravelExchange
  ],
  [EvmChainId.POLYGON]: [
    '0x6Bfce69d1Df30FD2B2C8e478EDEC9dAa643Ae3B8', // ClipperVerifiedExchange
    '0xd01e3549160c62acabc4d0eb89f67aafa3de8eed', // ClipperDirectExchangeV0
  ],
  [EvmChainId.POLYGON_ZKEVM]: [
    '0x769728b5298445BA2828c0f3F5384227fbF590C5', // ClipperPackedVerifiedExchange
  ],
  [EvmChainId.OPTIMISM]: [
    '0x5130f6cE257B8F9bF7fac0A0b519Bd588120ed40', // ClipperPackedVerifiedExchange
    '0xdbd4ffc32b34f630dd8ac18d37162ec8462db7db', // ClipperPackedExchange
  ],
  [EvmChainId.ARBITRUM]: [
    '0x769728b5298445BA2828c0f3F5384227fbF590C5', // ClipperPackedVerifiedExchange
    '0xe7b0ce0526fbe3969035a145c9e9691d4d9d216c', // ClipperPackedVerifiedExchange
  ],
  [EvmChainId.BASE]: [
    '0xb32D856cAd3D2EF07C94867A800035E37241247C', // ClipperPackedVerifiedExchange
  ],
  [EvmChainId.MANTLE]: [
    '0x769728b5298445BA2828c0f3F5384227fbF590C5', // ClipperPackedVerifiedExchange
    '0xe7b0ce0526fbe3969035a145c9e9691d4d9d216c', // ClipperPackedVerifiedExchange
  ],
  [EvmChainId.KATANA]: [
    // Placeholder - update when available
  ],
}

// Blade Cove addresses (liquidity management contracts)
export const BLADE_COVE_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x44d097113DBEad613fde74b387081FB3b547C54f', // ClipperCove
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: [
    '0xB873921b1ADd94ea47Bf983B060CE812e97873df', // ClipperCove
    '0x9e233dd6a90678baacd89c05ce5c48f43fcc106e', // ClipperCove
  ],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Permit Router addresses (for gasless transactions)
export const BLADE_PERMIT_ROUTER_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [],
  [EvmChainId.POLYGON]: ['0xF33141BC4E9D1d92a2Adba2fa27A09c2DA2AF3eB'],
  [EvmChainId.POLYGON_ZKEVM]: ['0x93a5943e3091e94aA16f0813BB6901C3E9D4eB98'],
  [EvmChainId.OPTIMISM]: ['0xF33141BC4E9D1d92a2Adba2fa27A09c2DA2AF3eB'],
  [EvmChainId.ARBITRUM]: ['0x93a5943e3091e94aA16f0813BB6901C3E9D4eB98'],
  [EvmChainId.BASE]: ['0x41c5362ADf3a2Cf6815454F7633172e7F6C1f834'],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// LP Transfer contracts
export const BLADE_LP_TRANSFER_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: ['0x53954A6191aD795E331CfFDb1b035D389f2aC516'],
  [EvmChainId.POLYGON]: ['0x4715CCd2e0284CEDf7D5cC6b40420432EBc9E561'],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: ['0x4c16dD6e9b402Ea4FB5bE647Be2F49e3d59BB08A'],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Register contracts
export const BLADE_REGISTER_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [
    '0xe56a524F7F35d39E5d5C34428De497da29D4B88b', // Register contract
  ],
}

// Blade Fee Split contracts
export const BLADE_FEE_SPLIT_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x84f4625C3E92b368E403cB002A9bF9bc7a9ae1b9', // Protocol deposit fee split
    '0x51b0efa27ff4f29f8315496f01952377d581ce73', // Fee split
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Farm Fee Split contracts
export const BLADE_FARM_FEE_SPLIT_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0xD0454428ecd868A9AC615125FCbDB5Da9027436e', // Farm fee split
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Vault contracts
export const BLADE_VAULT_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x84f4625C3E92b368E403cB002A9bF9bc7a9ae1b9', // Protocol deposit vault
    '0xD0454428ecd868A9AC615125FCbDB5Da9027436e', // Farm vault
    '0x51b0efa27ff4f29f8315496f01952377d581ce73', // Fee split vault
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [
    '0xAc2B3f9a13E7273639bcDCa55742391CDACC74cB', // Farm vault
  ],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Farming Helper contracts
export const BLADE_FARMING_HELPER_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x6e3FB8a019E78785E80cea1d413Bc3Ab650c2449', // Farming helper
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [
    '0x55f7c152b0C3cc1cD7479e4858Ac07f50D7fcFAD', // Farming helper
  ],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}

// Blade Transfer Helper contracts
export const BLADE_TRANSFER_HELPER_ADDRESSES: Record<BladeChainId, EvmAddress[]> = {
  [EvmChainId.ETHEREUM]: [
    '0x12bb166F997146D3d33645146eEdBC4a923195D7', // Transfer helper
  ],
  [EvmChainId.POLYGON]: [],
  [EvmChainId.POLYGON_ZKEVM]: [],
  [EvmChainId.OPTIMISM]: [],
  [EvmChainId.ARBITRUM]: [],
  [EvmChainId.BASE]: [],
  [EvmChainId.MANTLE]: [],
  [EvmChainId.KATANA]: [],
}
