---
'sushi': major
---

Validate swap and quote request parameters and express integration fees as
fractional numbers instead of bigint values. Quote requests no longer accept a
fee receiver.

Add generic chain and currency serialization helpers, update Solana address
support, and remove the accidental `@uniswap/token-lists` re-exports.
