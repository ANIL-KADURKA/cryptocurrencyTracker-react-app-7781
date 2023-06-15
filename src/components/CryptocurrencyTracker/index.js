import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptData: [],
  }

  componentDidMount() {
    this.getCryptData()
  }

  getCryptData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      cryptData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptData} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader" className="load">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptData={cryptData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
