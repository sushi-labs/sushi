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
      address: '0x104f1ab42674565ec3df0bfebccc4186f72fa7ed',
      deploymentBlock: 21_957_383n,
    },
  ],
} as const satisfies Record<
  LaunchpadV1ChainId,
  readonly LaunchpadV1FactoryConfig[]
>
