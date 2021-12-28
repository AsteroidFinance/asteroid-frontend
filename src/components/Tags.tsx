import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from 'asteroidfinance-uikit'

const NoFeeTag = () => (
  <Tag variant="success" outline startIcon={<VerifiedIcon />}>
    No Fees
  </Tag>
)

const RiskTag = ({ risk }) => (
  <Tag variant={risk === "Netswap" ? 'failure' : 'success'} outline>
    {risk}
  </Tag>
)

const CoreTag = () => (
  <Tag variant='secondary' outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant='textSubtle' outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant='binance' outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag, NoFeeTag }
