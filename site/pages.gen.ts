// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages } from 'waku/router'

// prettier-ignore
type Page =
  | { path: '/aggregator/introduction'; render: 'static' }
  | { path: '/amm/clamm'; render: 'static' }
  | { path: '/amm/cpamm'; render: 'static' }
  | { path: '/amm/introduction'; render: 'static' }
  | { path: '/api/blade/swagger'; render: 'static' }
  | { path: '/api/errors/estimate-gas'; render: 'static' }
  | { path: '/api/errors'; render: 'static' }
  | { path: '/api/errors/insufficient-allowance'; render: 'static' }
  | { path: '/api/errors/insufficient-balance'; render: 'static' }
  | { path: '/api/errors/invalid-api-key'; render: 'static' }
  | { path: '/api/errors/no-fresh-data'; render: 'static' }
  | { path: '/api/errors/not-found'; render: 'static' }
  | { path: '/api/errors/ratelimit-exceeded'; render: 'static' }
  | { path: '/api/errors/server'; render: 'static' }
  | { path: '/api/errors/service-unavailable'; render: 'static' }
  | { path: '/api/errors/unauthorized'; render: 'static' }
  | { path: '/api/errors/validation'; render: 'static' }
  | { path: '/api/examples/pricing'; render: 'static' }
  | { path: '/api/examples/quote'; render: 'static' }
  | { path: '/api/examples/swap'; render: 'static' }
  | { path: '/api/supported-chains'; render: 'static' }
  | { path: '/api/swagger'; render: 'static' }
  | { path: '/blade/how-to-use-blade/faqs'; render: 'static' }
  | {
      path: '/blade/how-to-use-blade/liquidity-pools/depositing-and-withdrawing'
      render: 'static'
    }
  | { path: '/blade/how-to-use-blade/liquidity-pools'; render: 'static' }
  | {
      path: '/blade/introduction/blades-benchmark-no-impermanent-loss/appendix-math'
      render: 'static'
    }
  | {
      path: '/blade/introduction/blades-benchmark-no-impermanent-loss/blade-vs-cpmms-vs-hodling'
      render: 'static'
    }
  | {
      path: '/blade/introduction/blades-benchmark-no-impermanent-loss'
      render: 'static'
    }
  | {
      path: '/blade/introduction/how-blade-makes-money-for-lps'
      render: 'static'
    }
  | {
      path: '/blade/introduction/how-lps-earn-from-arbitrage'
      render: 'static'
    }
  | {
      path: '/blade/introduction/why-blade-has-better-trading-prices'
      render: 'static'
    }
  | { path: '/blade/introduction'; render: 'static' }
  | { path: '/community'; render: 'static' }
  | { path: '/contracts/blade'; render: 'static' }
  | { path: '/contracts/clamm'; render: 'static' }
  | { path: '/contracts/cpamm'; render: 'static' }
  | { path: '/contracts/launchpad'; render: 'static' }
  | { path: '/contracts/lbamm'; render: 'static' }
  | { path: '/contracts/red-snwapper'; render: 'static' }
  | { path: '/contracts/sushi'; render: 'static' }
  | { path: '/contracts/xsushi'; render: 'static' }
  | { path: '/dao/governance'; render: 'static' }
  | { path: '/dao/tokenomics'; render: 'static' }
  | { path: '/'; render: 'static' }
  | { path: '/launchpad/creators'; render: 'static' }
  | { path: '/launchpad/integrators'; render: 'static' }
  | { path: '/launchpad/overview'; render: 'static' }
  | { path: '/resources'; render: 'static' }
  | { path: '/roadmap'; render: 'static' }
  | { path: '/sdk/concepts/chains'; render: 'static' }
  | { path: '/sdk/concepts/currency'; render: 'static' }
  | { path: '/sdk/concepts/primitives'; render: 'static' }
  | { path: '/sdk/guides/native-vs-wrapped'; render: 'static' }
  | { path: '/sdk/guides/pools-v2'; render: 'static' }
  | { path: '/sdk/guides/pools-v3'; render: 'static' }
  | { path: '/sdk/guides/price'; render: 'static' }
  | { path: '/sdk/guides/quote'; render: 'static' }
  | { path: '/sdk/guides/swap'; render: 'static' }
  | { path: '/sdk/guides/tokens'; render: 'static' }
  | { path: '/sdk'; render: 'static' }
  | { path: '/sdk/reference/evm/abi'; render: 'static' }
  | { path: '/sdk/reference/evm/api'; render: 'static' }
  | { path: '/sdk/reference/evm/chain'; render: 'static' }
  | { path: '/sdk/reference/evm/config'; render: 'static' }
  | { path: '/sdk/reference/evm/currency'; render: 'static' }
  | { path: '/sdk/reference/evm/dex'; render: 'static' }
  | { path: '/sdk/reference/evm/format'; render: 'static' }
  | { path: '/sdk/reference/evm/pool-v2'; render: 'static' }
  | { path: '/sdk/reference/evm/pool-v3'; render: 'static' }
  | { path: '/sdk/reference/evm/pool'; render: 'static' }
  | { path: '/sdk/reference/evm/token-list'; render: 'static' }
  | { path: '/sdk/reference/evm/types'; render: 'static' }
  | { path: '/sdk/reference/evm/utils'; render: 'static' }
  | { path: '/sdk/reference/evm/validate'; render: 'static' }
  | { path: '/sdk/reference/evm'; render: 'static' }
  | { path: '/sdk/reference/mvm/chain'; render: 'static' }
  | { path: '/sdk/reference/mvm/config'; render: 'static' }
  | { path: '/sdk/reference/mvm/currency'; render: 'static' }
  | { path: '/sdk/reference/mvm/utils'; render: 'static' }
  | { path: '/sdk/reference/mvm'; render: 'static' }
  | { path: '/sdk/reference/stellar/address'; render: 'static' }
  | { path: '/sdk/reference/stellar/chain'; render: 'static' }
  | { path: '/sdk/reference/stellar/config'; render: 'static' }
  | { path: '/sdk/reference/stellar/currency'; render: 'static' }
  | { path: '/sdk/reference/stellar/types'; render: 'static' }
  | { path: '/sdk/reference/stellar/utils'; render: 'static' }
  | { path: '/sdk/reference/stellar'; render: 'static' }
  | { path: '/sdk/reference/sushi/chain'; render: 'static' }
  | { path: '/sdk/reference/sushi/currency'; render: 'static' }
  | { path: '/sdk/reference/sushi/format'; render: 'static' }
  | { path: '/sdk/reference/sushi/math'; render: 'static' }
  | { path: '/sdk/reference/sushi/types'; render: 'static' }
  | { path: '/sdk/reference/sushi/utils'; render: 'static' }
  | { path: '/sdk/reference/sushi/validate'; render: 'static' }
  | { path: '/sdk/reference/sushi'; render: 'static' }
  | { path: '/sdk/reference/svm/chain'; render: 'static' }
  | { path: '/sdk/reference/svm/config'; render: 'static' }
  | { path: '/sdk/reference/svm/currency'; render: 'static' }
  | { path: '/sdk/reference/svm/utils'; render: 'static' }
  | { path: '/sdk/reference/svm'; render: 'static' }
  | { path: '/security'; render: 'static' }
  | { path: '/subgraphs/blade'; render: 'static' }
  | { path: '/subgraphs/blocks'; render: 'static' }
  | { path: '/subgraphs/clamm'; render: 'static' }
  | { path: '/subgraphs/cpamm'; render: 'static' }
  | { path: '/subgraphs/xsushi'; render: 'static' }
  | { path: '/what-is-sushi'; render: 'static' }
  | { path: '/why-sushi'; render: 'static' }

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>
  }
  interface CreatePagesConfig {
    pages: Page
  }
}
