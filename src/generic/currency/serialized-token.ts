import * as z from 'zod'
import type { CurrencyMetadata } from './currency.js'

export function createSerializedTokenSchema<
  TChainId extends number,
  TAddress extends string,
  TMetadata extends {} = CurrencyMetadata,
  TExtra extends z.ZodRawShape = Record<never, never>,
>({
  isChainId,
  isAddress,
  metadata,
  extra = {} as TExtra,
}: {
  isChainId: (chainId: number) => chainId is TChainId
  isAddress: (address: string) => address is TAddress
  metadata?: z.ZodType<TMetadata> | undefined
  extra?: TExtra
}) {
  return z.object({
    chainId: z
      .number()
      .int()
      .refine(isChainId)
      .transform((value) => value as TChainId),
    address: z
      .string()
      .refine(isAddress)
      .transform((value) => value as TAddress),
    symbol: z.string(),
    name: z.string(),
    decimals: z.number().int().nonnegative(),
    type: z.literal('token'),
    metadata: (metadata ??
      z
        .record(z.string(), z.unknown())
        .optional()
        .default({})) as z.ZodType<TMetadata>,
    ...extra,
  })
}
