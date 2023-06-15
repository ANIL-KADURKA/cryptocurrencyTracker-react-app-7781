import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptData} = props
  return (
    <div className="crypto-currency-container">
      <h1 className="head">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        alt="cryptocurrency"
        className="crypt-image"
      />
      <ul className="list-container">
        <li className="li-element">
          <div className="li-op">
            <p className="para">Coin</p>
            <p className="para">Type</p>
          </div>
          <div className="li-op">
            <p className="para">USD</p>
            <p className="para">EURO</p>
          </div>
        </li>
        {cryptData.map(each => (
          <CryptocurrencyItem CryptoCurrencyEachItem={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
