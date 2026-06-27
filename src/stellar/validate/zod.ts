import * as z from 'zod'
import {
  isStellarAccountAddress,
  isStellarAddress,
  isStellarContractAddress,
  type StellarAccountAddress,
  type StellarAddress,
  type StellarContractAddress,
} from '../address.js'
import { normalizeStellarAddress } from '../utils/normalize-address.js'

export const stellarAddress = () =>
  z
    .string()
    .transform((value) => normalizeStellarAddress(value as StellarAddress))
    .refine(isStellarAddress, { message: 'Invalid address' })

export const stellarAccountAddress = () =>
  z
    .string()
    .transform((value) =>
      normalizeStellarAddress(value as StellarAccountAddress),
    )
    .refine(isStellarAccountAddress, { message: 'Invalid address' })

export const stellarContractAddress = () =>
  z
    .string()
    .transform((value) =>
      normalizeStellarAddress(value as StellarContractAddress),
    )
    .refine(isStellarContractAddress, { message: 'Invalid address' })

export const szstellar = {
  accountAddress: stellarAccountAddress,
  address: stellarAddress,
  contractAddress: stellarContractAddress,
}
