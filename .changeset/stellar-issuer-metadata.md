---
'sushi': minor
---

Move Stellar token issuer data into token metadata. `StellarToken` and `SerializedStellarToken` no longer expose a top-level `issuer` field; use nullable `metadata.issuer` instead.
