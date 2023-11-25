import React, { Component } from 'react'
import Tgain from './Tgain'
import TradingViewWidget from './TradingView';
import Navbar from './nav'
export default class Topgain extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <Tgain />
            </div>
            <div className="col-12 col-lg-6">
              <TradingViewWidget height={500} width={700} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
