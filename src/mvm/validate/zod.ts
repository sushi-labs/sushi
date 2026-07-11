import { createAddressSchema } from '../../generic/validate/create-address-schema.js'
import { isMvmAddress } from '../currency/token.js'
import { normalizeMvmAddress } from '../utils/normalize-address.js'

export const mvmAddress = () =>
  createAddressSchema(isMvmAddress, normalizeMvmAddress)

export const szmvm = {
  address: mvmAddress,
}
