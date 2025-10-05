import { type Address, isAddress } from 'viem'
import * as z from 'zod'

export const evmAddress = () =>
  z
    .string()
    .refine((value) => isAddress(value, { strict: false }), {
      message: 'Invalid address',
    })
    .transform((value) => value as Address)

export const szevm = {
  address: evmAddress,
}
