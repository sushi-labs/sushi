import type { Sidebar } from 'vocs'

export const sidebar = {
  '/': [
    {
      text: 'Introduction',
      items: [
        { text: '❓ What is Sushi', link: '/what-is-sushi' },
        { text: '🤔 Why Sushi', link: '/why-sushi' },
        // { text: '🤝 Partnership', link: '/partnership' },
        { text: '🔒 Security', link: '/security' },
        // { text: '🔗 Ecosystem', link: '/ecosystem' },
        // { text: '🚀 Roadmap', link: '/roadmap' },
        { text: '👨‍👩‍👧‍👦 Community', link: '/community' },
        { text: '📚 Resources', link: '/resources' },
      ],
    },
    {
      text: 'DAO',
      items: [
        { text: '🍣 Sushinomics', link: '/dao/tokenomics' },
        { text: '🏛️ Governance', link: '/dao/governance' },
      ],
    },
    {
      text: 'API',
      items: [
        {
          text: 'Swagger',
          link: '/api/swagger',
        },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Pricing', link: '/api/examples/pricing' },
            { text: 'Quote', link: '/api/examples/quote' },
            { text: 'Swap', link: '/api/examples/swap' },
          ],
        },
        {
          text: 'Errors',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/api/errors',
            },
            {
              text: 'Estimate Gas',
              link: '/api/errors/estimate-gas',
            },
            {
              text: 'Insufficient Allowance',
              link: '/api/errors/insufficient-allowance',
            },
            {
              text: 'Insufficient Balance',
              link: '/api/errors/insufficient-balance',
            },
            {
              text: 'Invalid Api Key',
              link: '/api/errors/invalid-api-key',
            },
            {
              text: 'No Fresh Data',
              link: '/api/errors/no-fresh-data',
            },
            {
              text: 'Not Found',
              link: '/api/errors/not-found',
            },
            {
              text: 'Ratelimit Exceeded',
              link: '/api/errors/ratelimit-exceeded',
            },
            {
              text: 'Server',
              link: '/api/errors/server',
            },
            {
              text: 'Service Unavailable',
              link: '/api/errors/service-unavailable',
            },
            {
              text: 'Unauthorized',
              link: '/api/errors/unauthorized',
            },
            {
              text: 'Validation',
              link: '/api/errors/validation',
            },
          ],
        },
        {
          text: 'Blade',
          collapsed: false,
          items: [
            {
              text: 'Swagger',
              link: '/api/blade/swagger',
            },
          ],
        },
      ],
    },
    {
      text: 'SDK',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/sdk' },
        {
          text: 'Concepts',
          collapsed: true,
          items: [
            { text: 'Chains', link: '/sdk/concepts/chains' },
            { text: 'Currency', link: '/sdk/concepts/currency' },
            { text: 'Primitives', link: '/sdk/concepts/primitives' },
          ],
        },
        {
          text: 'Guides',
          collapsed: true,
          items: [
            { text: 'Price', link: '/sdk/guides/price' },
            { text: 'Quote', link: '/sdk/guides/quote' },
            { text: 'Swap', link: '/sdk/guides/swap' },
            {
              text: 'Native vs Wrapped',
              link: '/sdk/guides/native-vs-wrapped',
            },
            { text: 'Tokens', link: '/sdk/guides/tokens' },
            { text: 'V2 Pools', link: '/sdk/guides/pools-v2' },
            { text: 'V3 Pools', link: '/sdk/guides/pools-v3' },
          ],
        },
        {
          text: 'Reference',
          collapsed: true,
          items: [
            {
              text: 'sushi',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/reference/sushi' },
                { text: 'Chain', link: '/sdk/reference/sushi/chain' },
                { text: 'Currency', link: '/sdk/reference/sushi/currency' },
                { text: 'Math', link: '/sdk/reference/sushi/math' },
                { text: 'Format', link: '/sdk/reference/sushi/format' },
                { text: 'Types', link: '/sdk/reference/sushi/types' },
                { text: 'Utils', link: '/sdk/reference/sushi/utils' },
                { text: 'Validate', link: '/sdk/reference/sushi/validate' },
              ],
            },
            {
              text: 'sushi/evm',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/reference/evm' },
                { text: 'API', link: '/sdk/reference/evm/api' },
                { text: 'Chain', link: '/sdk/reference/evm/chain' },
                { text: 'Currency', link: '/sdk/reference/evm/currency' },
                { text: 'Config', link: '/sdk/reference/evm/config' },
                { text: 'DEX', link: '/sdk/reference/evm/dex' },
                { text: 'Pool', link: '/sdk/reference/evm/pool' },
                { text: 'V2 Pool', link: '/sdk/reference/evm/pool-v2' },
                { text: 'V3 Pool', link: '/sdk/reference/evm/pool-v3' },
                { text: 'ABI', link: '/sdk/reference/evm/abi' },
                { text: 'Token List', link: '/sdk/reference/evm/token-list' },
                { text: 'Format', link: '/sdk/reference/evm/format' },
                { text: 'Utils', link: '/sdk/reference/evm/utils' },
                { text: 'Validate', link: '/sdk/reference/evm/validate' },
                { text: 'Types', link: '/sdk/reference/evm/types' },
              ],
            },
            {
              text: 'sushi/stellar',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/reference/stellar' },
                { text: 'Address', link: '/sdk/reference/stellar/address' },
                { text: 'Chain', link: '/sdk/reference/stellar/chain' },
                { text: 'Currency', link: '/sdk/reference/stellar/currency' },
                { text: 'Config', link: '/sdk/reference/stellar/config' },
                { text: 'Utils', link: '/sdk/reference/stellar/utils' },
                { text: 'Types', link: '/sdk/reference/stellar/types' },
              ],
            },
            {
              text: 'sushi/svm',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/reference/svm' },
                { text: 'Chain', link: '/sdk/reference/svm/chain' },
                { text: 'Currency', link: '/sdk/reference/svm/currency' },
                { text: 'Config', link: '/sdk/reference/svm/config' },
                { text: 'Utils', link: '/sdk/reference/svm/utils' },
              ],
            },
            {
              text: 'sushi/mvm',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/reference/mvm' },
                { text: 'Chain', link: '/sdk/reference/mvm/chain' },
                { text: 'Currency', link: '/sdk/reference/mvm/currency' },
                { text: 'Config', link: '/sdk/reference/mvm/config' },
                { text: 'Utils', link: '/sdk/reference/mvm/utils' },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   text: 'Widget',
    //   collapsed: true,
    //   items: [],
    // },
    // {
    //   text: 'App',
    //   collapsed: true,
    //   items: [
    //     { text: 'Swap', link: '/app/swap' },
    //     { text: 'Limit', link: '/app/limit' },
    //     { text: 'DCA', link: '/app/dca' },
    //     { text: 'Cross-Chain Swap', link: '/app/cross-chain-swap' },
    //   ],
    // },
    {
      text: 'Contracts',
      collapsed: true,
      items: [
        {
          text: 'Aggregator',
          collapsed: true,
          items: [{ text: 'RedSnwapper', link: '/contracts/red-snwapper' }],
        },
        {
          text: 'AMM',
          collapsed: true,
          items: [
            { text: 'clAMM  (SushiSwap V3)', link: '/contracts/clamm' },
            { text: 'cpAMM  (SushiSwap V2)', link: '/contracts/cpamm' },
            // { text: 'lbAMM', link: '/contracts/lbamm' },
          ],
        },
        {
          text: 'Governance',
          collapsed: true,
          items: [
            { text: 'SUSHI', link: '/contracts/sushi' },
            { text: 'xSUSHI', link: '/contracts/xsushi' },
          ],
        },
        { text: 'Blade', link: '/contracts/blade' },
      ],
    },
    {
      text: 'Subgraphs',
      collapsed: true,
      items: [
        { text: 'Blocks', link: '/subgraphs/blocks' },
        { text: 'clAMM (SushiSwap V3)', link: '/subgraphs/clamm' },
        { text: 'cpAMM (SushiSwap V2)', link: '/subgraphs/cpamm' },
        { text: 'xSUSHI', link: '/subgraphs/xsushi' },
        { text: 'Blade', link: '/subgraphs/blade' },
        // { text: 'Quote', link: '/api/quote' },
      ],
    },

    {
      text: 'Products',
      collapsed: true,
      items: [
        {
          text: 'DEX Aggregator',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              link: '/aggregator/introduction',
            },
          ],
        },

        {
          text: 'AMM',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              link: '/amm/introduction',
            },
            {
              text: 'clAMM',
              link: '/amm/clamm',
            },
            {
              text: 'cpAMM',
              link: '/amm/cpamm',
            },
            // {
            //   text: 'lbAMM',
            //   link: '/amm/lbamm',
            // },
          ],
        },
        {
          text: 'Blade',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                {
                  text: 'What is Blade?',
                  link: '/blade/introduction',
                },
                {
                  text: 'How Blade Makes Money for LPs',
                  link: '/blade/introduction/how-blade-makes-money-for-lps',
                },
                {
                  text: 'How LPs Earn from Arbitrage',
                  link: '/blade/introduction/how-lps-earn-from-arbitrage',
                },
                {
                  text: "Blade's Benchmark: No Impermanent Loss",
                  collapsed: true,
                  items: [
                    {
                      text: 'Overview',
                      link: '/blade/introduction/blades-benchmark-no-impermanent-loss',
                    },
                    {
                      text: 'Blade vs. CPMMs vs. HODLing',
                      link: '/blade/introduction/blades-benchmark-no-impermanent-loss/blade-vs-cpmms-vs-hodling',
                    },
                    {
                      text: 'Appendix: Math',
                      link: '/blade/introduction/blades-benchmark-no-impermanent-loss/appendix-math',
                    },
                  ],
                },
                {
                  text: 'Why Blade Has Better Trading Prices',
                  link: '/blade/introduction/why-blade-has-better-trading-prices',
                },
              ],
            },
            {
              text: 'How to Use Blade',
              collapsed: true,
              items: [
                {
                  text: 'Liquidity Pools',
                  collapsed: true,
                  items: [
                    {
                      text: 'Overview',
                      link: '/blade/how-to-use-blade/liquidity-pools',
                    },
                    {
                      text: 'Depositing & Withdrawing',
                      link: '/blade/how-to-use-blade/liquidity-pools/depositing-and-withdrawing',
                    },
                  ],
                },
                {
                  text: 'FAQs',
                  link: '/blade/how-to-use-blade/faqs',
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   text: 'Guides',
    //   items: [
    //     { text: 'Swap', link: '/swap' },
    //     { text: 'Cross-Chain Swap', link: '/cross-chain-swap' },
    //     { text: 'Add Liquidity', link: '/add-liquidity' },
    //     { text: 'Remove Liquidity', link: '/remove-liquidity' },
    //     { text: 'Zap', link: '/zap' },
    //     // { text: 'Migration Guide', link: '/migration-guide' },
    //     // { text: 'Ethers v5 → viem', link: '/ethers-migration' },
    //     // { text: 'TypeScript', link: '/typescript' },
    //     // { text: 'Error Handling', link: '/error-handling' },
    //     // { text: 'Blob Transactions', link: '/guides/blob-transactions' },
    //   ],
    // },
  ],
} as const satisfies Sidebar
