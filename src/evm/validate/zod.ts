import { createAddressSchema } from '../../generic/validate/create-address-schema.js'
import { isEvmAddress } from '../currency/token.js'
import { normalizeEvmAddress } from '../utils/normalize-address.js'

export const evmAddress = () =>
  createAddressSchema(isEvmAddress, normalizeEvmAddress)

export const szevm = {
  address: evmAddress,
}
