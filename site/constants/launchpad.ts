import {
  type EvmAddress,
  LAUNCHPAD_V1_FACTORIES,
  type LaunchpadV1ChainId,
} from 'sushi/evm'

export const LAUNCHPAD_V1_FACTORY_ADDRESSES = Object.fromEntries(
  Object.entries(LAUNCHPAD_V1_FACTORIES).map(([chainId, factories]) => [
    chainId,
    factories.map(({ address }) => address),
  ]),
) as Record<LaunchpadV1ChainId, EvmAddress[]>
