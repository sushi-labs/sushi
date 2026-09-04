import {
  type EvmAddress,
  LAUNCHPAD_V1_FACTORIES,
  LAUNCHPAD_V2_FACTORIES,
  type LaunchpadV1ChainId,
  type LaunchpadV2ChainId,
} from 'sushi/evm'

export const LAUNCHPAD_V1_FACTORY_ADDRESSES = Object.fromEntries(
  Object.entries(LAUNCHPAD_V1_FACTORIES).map(([chainId, factories]) => [
    chainId,
    factories.map(({ address }) => address),
  ]),
) as unknown as Record<LaunchpadV1ChainId, EvmAddress[]>

export const LAUNCHPAD_V2_FACTORY_ADDRESSES = Object.fromEntries(
  Object.entries(LAUNCHPAD_V2_FACTORIES).map(([chainId, factories]) => [
    chainId,
    factories.map(({ address }) => address),
  ]),
) as unknown as Record<LaunchpadV2ChainId, EvmAddress[]>
