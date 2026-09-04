import {
  type EvmAddress,
  EvmChainId,
  LAUNCHPAD_V1_FACTORIES,
  type LaunchpadV1ChainId,
} from 'sushi/evm'

export const LAUNCHPAD_V1_FACTORY_ADDRESSES = Object.fromEntries(
  Object.entries(LAUNCHPAD_V1_FACTORIES).map(([chainId, factories]) => [
    chainId,
    factories.map(({ address }) => address),
  ]),
) as unknown as Record<LaunchpadV1ChainId, EvmAddress[]>

export const LAUNCHPAD_V2_FACTORY_ADDRESSES = {
  [EvmChainId.ROBINHOOD]: ['0xF1716eBf85836ffE2985db9A50dd29e5814caBe9'],
} as Record<(typeof EvmChainId)['ROBINHOOD'], EvmAddress[]>
