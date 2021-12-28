import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: "Netswap",
    lpSymbol: 'AST/WETH LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x70fDB27A99E450F4E604D92a8C1BA8AcfC3D8f0f'
    },
    tokenSymbol: 'AST',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D"
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: "Single",
    lpSymbol: 'AST',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      3: '0x1172A350e0A497aE7779e335fDF62336ce2c5f4D'
    },
    tokenSymbol: 'AST',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      3: "0x1172A350e0A497aE7779e335fDF62336ce2c5f4D"
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isTokenOnly: true
  }
]

export default farms
