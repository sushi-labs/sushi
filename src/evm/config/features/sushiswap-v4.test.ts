import type { Address } from 'viem'
import { describe, expect, expectTypeOf, it } from 'vitest'
import * as sushiSwapV4CLPoolManagerAbi from '../../abi/sushiSwapV4CLPoolManagerAbi/index.js'
import * as sushiSwapV4CLPoolManagerOwnerAbi from '../../abi/sushiSwapV4CLPoolManagerOwnerAbi/index.js'
import * as sushiSwapV4CLPositionDescriptorAbi from '../../abi/sushiSwapV4CLPositionDescriptorAbi/index.js'
import * as sushiSwapV4CLPositionManagerAbi from '../../abi/sushiSwapV4CLPositionManagerAbi/index.js'
import * as sushiSwapV4CLProtocolFeeControllerAbi from '../../abi/sushiSwapV4CLProtocolFeeControllerAbi/index.js'
import * as sushiSwapV4CLQuoterAbi from '../../abi/sushiSwapV4CLQuoterAbi/index.js'
import * as sushiSwapV4CLTickLensAbi from '../../abi/sushiSwapV4CLTickLensAbi/index.js'
import * as sushiSwapV4VaultAbi from '../../abi/sushiSwapV4VaultAbi/index.js'
import { EvmChainId, getEvmChainById } from '../../chain/index.js'
import {
  isSushiSwapChainId,
  SUSHISWAP_SUPPORTED_CHAIN_IDS,
} from './sushiswap.js'
import {
  isSushiSwapV4ChainId,
  SUSHISWAP_V4_CL_POOL_MANAGER,
  SUSHISWAP_V4_CL_POOL_MANAGER_OWNER,
  SUSHISWAP_V4_CL_POSITION_DESCRIPTOR,
  SUSHISWAP_V4_CL_POSITION_MANAGER,
  SUSHISWAP_V4_CL_PROTOCOL_FEE_CONTROLLER,
  SUSHISWAP_V4_CL_QUOTER,
  SUSHISWAP_V4_CL_TICK_LENS,
  SUSHISWAP_V4_SUPPORTED_CHAIN_IDS,
  SUSHISWAP_V4_VAULT,
} from './sushiswap-v4.js'

const V4_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.ETHEREUM,
  EvmChainId.SEPOLIA,
  EvmChainId.POLYGON,
  EvmChainId.UNICHAIN,
  EvmChainId.WORLDCHAIN,
  EvmChainId.ROBINHOOD,
] as const

const ADDRESS_MAPS = [
  [SUSHISWAP_V4_VAULT, '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2'],
  [SUSHISWAP_V4_CL_POOL_MANAGER, '0x81d732702f87d2d652ae79e9f52bf44928eca210'],
  [
    SUSHISWAP_V4_CL_PROTOCOL_FEE_CONTROLLER,
    '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  ],
  [
    SUSHISWAP_V4_CL_POOL_MANAGER_OWNER,
    '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  ],
  [
    SUSHISWAP_V4_CL_POSITION_DESCRIPTOR,
    '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  ],
  [
    SUSHISWAP_V4_CL_POSITION_MANAGER,
    '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  ],
  [SUSHISWAP_V4_CL_QUOTER, '0x2a0819373b09ec553e7b15808f76601362b1c291'],
  [SUSHISWAP_V4_CL_TICK_LENS, '0xbb9757cb480a08730f372dfe3068a6e86f35c63a'],
] as const

const ABI_BUNDLES = [
  [sushiSwapV4VaultAbi, 45, 47],
  [sushiSwapV4CLPoolManagerAbi, 63, 65],
  [sushiSwapV4CLProtocolFeeControllerAbi, 24, 24],
  [sushiSwapV4CLPoolManagerOwnerAbi, 25, 25],
  [sushiSwapV4CLPositionDescriptorAbi, 10, 10],
  [sushiSwapV4CLPositionManagerAbi, 77, 79],
  [sushiSwapV4CLQuoterAbi, 19, 19],
  [sushiSwapV4CLTickLensAbi, 3, 4],
] as const

describe('SushiSwap V4 configuration', () => {
  it('includes all nine deployed chains, including Sepolia', () => {
    expect(SUSHISWAP_V4_SUPPORTED_CHAIN_IDS).toEqual(V4_CHAIN_IDS)
    expect(getEvmChainById(EvmChainId.UNICHAIN).key).toBe('unichain')
    expect(getEvmChainById(EvmChainId.WORLDCHAIN).key).toBe('worldchain')
    expect(isSushiSwapV4ChainId(EvmChainId.UNICHAIN)).toBe(true)
    expect(isSushiSwapV4ChainId(EvmChainId.WORLDCHAIN)).toBe(true)
    expect(isSushiSwapV4ChainId(EvmChainId.SEPOLIA)).toBe(true)
    expect(SUSHISWAP_SUPPORTED_CHAIN_IDS).toContain(EvmChainId.UNICHAIN)
    expect(SUSHISWAP_SUPPORTED_CHAIN_IDS).toContain(EvmChainId.WORLDCHAIN)
    expect(isSushiSwapChainId(EvmChainId.UNICHAIN)).toBe(true)
    expect(isSushiSwapChainId(EvmChainId.WORLDCHAIN)).toBe(true)
  })

  it('matches the verified deployment address on every supported chain', () => {
    for (const [addresses, expectedAddress] of ADDRESS_MAPS) {
      expectTypeOf(addresses[EvmChainId.UNICHAIN]).toEqualTypeOf<Address>()
      expect(
        Object.keys(addresses)
          .map(Number)
          .sort((a, b) => a - b),
      ).toEqual([...V4_CHAIN_IDS].sort((a, b) => a - b))

      for (const chainId of V4_CHAIN_IDS) {
        expect(addresses[chainId]).toBe(expectedAddress)
      }
    }
  })

  it('exports every deployed wrapper ABI as function, event, and error fragments', () => {
    for (const [abi, expectedFragmentCount, expectedItemCount] of ABI_BUNDLES) {
      const fragments = Object.values(abi)
      expect(fragments).toHaveLength(expectedFragmentCount)
      expect(
        fragments.reduce((total, fragment) => total + fragment.length, 0),
      ).toBe(expectedItemCount)

      for (const fragment of fragments) {
        for (const item of fragment) {
          expect(['function', 'event', 'error']).toContain(item.type)
        }
      }
    }
  })

  it('keeps overloaded contract methods together in a single fragment', () => {
    expect(
      sushiSwapV4VaultAbi.sushiSwapV4VaultAbi_accountAppBalanceDelta,
    ).toHaveLength(3)
    expect(
      sushiSwapV4CLPositionManagerAbi.sushiSwapV4CLPositionManagerAbi_permit,
    ).toHaveLength(2)
    expect(
      sushiSwapV4CLTickLensAbi.sushiSwapV4CLTickLensAbi_getPopulatedTicksInWord,
    ).toHaveLength(2)
  })
})
