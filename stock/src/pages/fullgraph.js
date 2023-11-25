import React, { Component } from 'react'
import TradingViewWidget from './TradingView'
import Navbar from './nav'

export default class Fullgraph extends Component {
  render() {
    return (
      <div>
        <Navbar/>
            <TradingViewWidget height={500 } width={1200}  />
      </div>
    )
  }
}
