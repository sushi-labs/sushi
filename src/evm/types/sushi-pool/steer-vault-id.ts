import type { SushiSwapV3ChainId } from '~/evm/config/features/sushiswap-v3.js'
import type { EvmAddress } from '~/evm/currency/token.js'
import type { EvmID } from '../id.js'

export type SteerVaultId = {
  id: EvmID
  address: EvmAddress
  chainId: SushiSwapV3ChainId
}
