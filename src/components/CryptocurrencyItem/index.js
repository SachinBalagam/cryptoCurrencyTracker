// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = data
  return (
    <li className="each-item">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
