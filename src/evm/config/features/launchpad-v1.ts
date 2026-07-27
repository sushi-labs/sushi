import type { Address } from 'viem'
import { EvmChainId } from '../../chain/index.js'

export const LAUNCHPAD_V1_SUPPORTED_CHAIN_IDS = [EvmChainId.ROBINHOOD] as const

export const LaunchpadV1ChainIds = LAUNCHPAD_V1_SUPPORTED_CHAIN_IDS

export type LaunchpadV1ChainId =
  (typeof LAUNCHPAD_V1_SUPPORTED_CHAIN_IDS)[number]

export const isLaunchpadV1ChainId = (
  chainId: number,
): chainId is LaunchpadV1ChainId =>
  LAUNCHPAD_V1_SUPPORTED_CHAIN_IDS.includes(chainId as LaunchpadV1ChainId)

export type LaunchpadV1FactoryConfig = {
  readonly address: Address
  readonly deploymentBlock: bigint
}

export const LAUNCHPAD_V1_FACTORIES = {
  [EvmChainId.ROBINHOOD]: [
    {
      address: '0x30dd6230ead9312d5d00ad58ef6ef6a0093b0554',
      deploymentBlock: 18_149_814n,
    },
  ],
} as const satisfies Record<
  LaunchpadV1ChainId,
  readonly LaunchpadV1FactoryConfig[]
>
