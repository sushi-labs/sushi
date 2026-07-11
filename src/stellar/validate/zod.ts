import { createAddressSchema } from '../../generic/validate/create-address-schema.js'
import {
  isStellarAccountAddress,
  isStellarAddress,
  isStellarContractAddress,
} from '../address.js'
import { normalizeStellarAddress } from '../utils/normalize-address.js'

export const stellarAddress = () =>
  createAddressSchema(isStellarAddress, normalizeStellarAddress, true)

export const stellarAccountAddress = () =>
  createAddressSchema(isStellarAccountAddress, normalizeStellarAddress, true)

export const stellarContractAddress = () =>
  createAddressSchema(isStellarContractAddress, normalizeStellarAddress, true)

export const szstellar = {
  accountAddress: stellarAccountAddress,
  address: stellarAddress,
  contractAddress: stellarContractAddress,
}
