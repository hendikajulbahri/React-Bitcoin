import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import Bitcoin1 from './Bitcoin1'
// import Bitcoin2 from './Bitcoin2'


class Bitcoin3 extends Component {

    state = {
        dolar: 0,
        bitcoin: 0,
        bit: ''
    }

    componentDidMount () {
        axios.get('https://blockchain.info/ticker')
        .then((ambil) => {
            console.log(ambil)
            this.setState ({
                bit: ambil.data,
            })
        })
    }

  render() {

    let input = (e)=> {
        this.setState({
            bitcoin: e.target.value,
            dolar: this.state.bit.USD.buy
        }) 
    }

    let konversi = this.state.bitcoin*(this.state.dolar*14000)

    return (
        <div>
            <h1 className="text-center">Bitcoin ke Rupiah</h1>
        <input type="number" onInput={input}></input>
        <h4>BTC {this.state.bitcoin}, Rp. {konversi}</h4>
      </div>
    );
  }
}

export default Bitcoin3