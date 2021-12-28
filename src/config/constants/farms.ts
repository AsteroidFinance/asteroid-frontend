import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: "Tethys",
    lpSymbol: 'AST/METIS LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0xb517D1f93af3A04915b42E02deecF0BaeF23dfB8"
    },
    tokenSymbol: 'AST',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: contracts.cake[1088]
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: "Tethys",
    lpSymbol: 'AST/USDC LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0xf8F4cC8d224AbEFbFE22A8D758B9Bb5C35e7b868"
    },
    tokenSymbol: 'AST',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: contracts.cake[1088]
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: "Tethys",
    lpSymbol: 'TETHYS/METIS LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0xc9b290FF37fA53272e9D71A0B13a444010aF4497"
    },
    tokenSymbol: 'TETHYS',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: "0x69fdb77064ec5c84FA2F21072973eB28441F43F3"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: "Tethys",
    lpSymbol: 'WETH/METIS LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0xEE5adB5b0DfC51029Aca5Ad4Bc684Ad676b307F7"
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: contracts.weth[1088]
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: "Tethys",
    lpSymbol: 'METIS/USDC LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0xDd7dF3522a49e6e1127bf1A1d3bAEa3bc100583B"
    },
    tokenSymbol: 'METIS',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: contracts.wbnb[1088]
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: "Netswap",
    lpSymbol: 'USDC/USDT LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f',
      1088: "0x1caD5f8f5D4C0AD49646B2565CC0cA725E4280EA"
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: contracts.busd[1088]
    },
    quoteTokenSymbol: QuoteToken.UST,
    quoteTokenAdresses: contracts.ust,
  },

  {
    pid: 6,
    risk: "Single",
    lpSymbol: 'AST',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x1172A350e0A497aE7779e335fDF62336ce2c5f4D',
      1088: "0xa57E401D53bB6bB459247F28b004C800a24A0fF2"
    },
    tokenSymbol: 'AST',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D",
      1088: "0xa57E401D53bB6bB459247F28b004C800a24A0fF2"
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isTokenOnly: true
  }
]

export default farms
