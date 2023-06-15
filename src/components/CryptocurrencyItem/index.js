// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptoCurrencyEachItem} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
    id,
  } = CryptoCurrencyEachItem
  console.log(id)
  return (
    <li className="li-element2">
      <div className="li-op2">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="para3">{currencyName}</p>
      </div>
      <div className="li-op">
        <p className="para2">{usdValue}</p>
        <p className="para2">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
