// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
// In the URL, using the quote token 'BNB' is represented by 'ETH'
const getLiquidityUrlPathParts = ({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, exchange }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const firstPart = quoteTokenSymbol === 'BNB' ? 'METIS' : quoteTokenAdresses[chainId]
  const secondPart = tokenAddresses[chainId]
  if (exchange === "Tethys") {
    return `https://tethys.finance/pool/add?inputCurrency=${firstPart}&outputCurrency=${secondPart}`
  }
  
  return `https://netswap.io/#/add/${firstPart}/${secondPart}`

}

export default getLiquidityUrlPathParts
