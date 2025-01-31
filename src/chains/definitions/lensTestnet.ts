import { defineChain } from '../../utils/chain/defineChain.js'
import { chainConfig } from '../../zksync/chainConfig.js';

export const lensTestnet = /*#__PURE__*/ defineChain({
  ...chainConfig,
  id: 37_111,
  name: 'Lens Testnet',
  nativeCurrency: { name: 'GRASS', symbol: 'GRASS', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.lens.dev'],
      webSocket: ['wss://rpc.testnet.lens.dev/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Lens Block Explorer',
      url: 'https://block-explorer.testnet.lens.dev',
      apiUrl: 'https://block-explorer-api.staging.lens.dev/api',
    },
  },
  contracts: {
    multicall3: {
      address: "0x8A44EDE8a6843a997bC0Cc4659e4dB1Da8f91116",
      blockCreated: 22_325,
    },
  },
  testnet: true,
})
