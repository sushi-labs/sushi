import * as z from 'zod'

export function createAddressSchema<TAddress extends string>(
  isAddress: (value: string) => value is TAddress,
  normalize: (value: TAddress) => TAddress,
  normalizeBeforeValidation = false,
) {
  if (normalizeBeforeValidation) {
    return z
      .string()
      .transform((value) => normalize(value as TAddress))
      .refine(isAddress, { message: 'Invalid address' })
  }
  return z
    .string()
    .refine(isAddress, { message: 'Invalid address' })
    .transform((value) => normalize(value as TAddress))
}
