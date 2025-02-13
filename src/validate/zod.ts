import type { Hex } from 'viem'
import { isAddress } from 'viem'
import { z } from 'zod'

export const address = () =>
  z.string().refine((value) => isAddress(value, { strict: false }), {
    message: 'Invalid address',
  })

export const hex = () =>
  z
    .string()
    .refine((value) => /^0x[0-9a-fA-F]*$/.test(value), {
      message: 'Invalid hex',
    })
    .transform((value) => value.toLowerCase() as Hex)

export const sz = {
  address,
  hex,
}
