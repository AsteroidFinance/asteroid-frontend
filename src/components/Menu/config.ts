import { MenuEntry } from 'asteroidfinance-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy $AST',
        href: 'https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0xa57E401D53bB6bB459247F28b004C800a24A0fF2',
      },
      {
        label: 'Add Liquidity',
        href: 'https://tethys.finance/pool/add?inputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000&outputCurrency=0xa57E401D53bB6bB459247F28b004C800a24A0fF2',
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Tethys',
        href: 'https://info.tethys.finance/token/0xa57E401D53bB6bB459247F28b004C800a24A0fF2',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/metis/0xb517d1f93af3a04915b42e02deecf0baef23dfb8',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AsteroidFinance/',
      },
      {
        label: 'Docs',
        href: 'https://docs.asteroidfinance.net',
      },
    ],
  },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
