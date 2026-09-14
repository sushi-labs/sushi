import { type Address, zeroAddress } from 'viem'
import { EvmChainId } from '../../chain/index.js'

export const LAUNCHPAD_V2_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ROBINHOOD,
  EvmChainId.ARC,
] as const

export const LaunchpadV2ChainIds = LAUNCHPAD_V2_SUPPORTED_CHAIN_IDS

export type LaunchpadV2ChainId =
  (typeof LAUNCHPAD_V2_SUPPORTED_CHAIN_IDS)[number]

export const isLaunchpadV2ChainId = (
  chainId: number,
): chainId is LaunchpadV2ChainId =>
  LAUNCHPAD_V2_SUPPORTED_CHAIN_IDS.includes(chainId as LaunchpadV2ChainId)

export type LaunchpadV2FactoryConfig = {
  readonly address: Address
  readonly deploymentBlock: bigint
}

export const LAUNCHPAD_V2_FACTORIES = {
  [EvmChainId.ROBINHOOD]: [
    {
      address: '0xf1716ebf85836ffe2985db9a50dd29e5814cabe9',
      deploymentBlock: 38_395_704n,
    },
  ],
  [EvmChainId.ARC]: [
    {
      address: zeroAddress, // TODO: Replace after Arc deployment.
      deploymentBlock: 0n, // TODO: Replace after Arc deployment.
    },
  ],
} as const satisfies Record<
  LaunchpadV2ChainId,
  readonly LaunchpadV2FactoryConfig[]
>
