---
'sushi': minor
---

Allow `Amount` to carry application-defined currency types.

`BaseCurrency` now supports string or numeric identifiers while continuing to
default to `ChainId`. `Amount`, `Price`, and `subtractSlippage` accept the new
`AnyCurrency` contract, and amount serialization preserves an external
currency's serialized type. Blockchain-specific APIs and the `Currency` type
remain constrained to executable Sushi chain IDs.

Application-defined currencies implement `wrap()` like existing currencies and
may return themselves when no wrapped representation is needed.
