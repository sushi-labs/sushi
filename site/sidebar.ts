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
        // {
        //   text: 'Pricing',
        //   link: '/api/pricing',
        // },
        {
          text: 'Swagger',
          link: '/api/swagger',
        },
        {
          text: 'Examples',
          collapsed: true,
          items: [
            {
              text: 'Quote',
              link: '/api/quote',
            },
            {
              text: 'Swap',
              link: '/api/swap',
            },
          ],
        },
        {
          text: 'Errors',
          collapsed: true,
          items: [
            // {
            //   text: 'Bad Request',
            //   link: '/api/errors/bad-request',
            // },
            {
              text: 'Not Found',
              link: '/api/errors/not-found',
            },
            {
              text: 'Validation',
              link: '/api/errors/validation',
            },
            {
              text: 'Server',
              link: '/api/errors/server',
            },
            {
              text: 'Service Unavailable',
              link: '/api/errors/service-unavailable',
            },
          ],
        },
      ],
    },
    {
      text: 'SDK',
      collapsed: true,
      items: [
        { text: 'Installation', link: '/sdk/installation' },
        // { text: 'Quote', link: '/sdk/quote' },
        {
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'Quote', link: '/sdk/quote' },
            { text: 'Swap', link: '/sdk/swap' },
          ],
        },

        // { text: 'Limit', link: '/sdk/limit' },
        // { text: 'DCA', link: '/sdk/dca' },
        // { text: 'Cross-Chain Swap', link: '/sdk/cross-chain-swap' },
        // { text: 'Viem', link: '/sdk/viem' },
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
          items: [
            { text: 'RedSnwapper', link: '/contracts/red-snwapper' },
            { text: 'RouteProcessor8', link: '/contracts/route-processor-8' },
            { text: 'RouteProcessor7', link: '/contracts/route-processor-7' },
            // { text: 'RouteProcessor6', link: '/contracts/route-processor-6' },
            // { text: 'RouteProcessor5', link: '/contracts/route-processor-5' },
          ],
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
