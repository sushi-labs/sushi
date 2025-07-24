import type { Hex } from 'viem'
import * as z from 'zod'
import { szevm } from '../../evm/validate/zod.js'

export const hex = () =>
  z
    .string()
    .refine((value) => /^0x[0-9a-fA-F]*$/.test(value), {
      message: 'Invalid hex',
    })
    .transform((value) => value.toLowerCase() as Hex)

export const sz = {
  evm: szevm,
  hex,
}
