---
'sushi': patch
---

Compute `Price.getQuote` with exact `bigint` arithmetic instead of collapsing the
price to a double, so quotes are never rounded up past the true value and
high-precision prices no longer overflow to `Infinity`/`NaN`. Getting a quote
from a price built with a zero base amount now throws a descriptive error.
