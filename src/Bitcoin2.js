import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'



class Bitcoin2 extends Component {

    state = {
        rupiah: 0,
        usd: 0,
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
            rupiah: e.target.value,
            usd: this.state.bit.USD.buy
        }) 
    }

    let konversi = (this.state.rupiah/14000)/(this.state.usd)

    return (
        <div>

            <h1 className="text-center">Rupiah Ke Bitcoin</h1>
            <br/>
        <input type="number" onInput={input}></input>
        <h4>Rp. {this.state.rupiah}, = {konversi} BTC</h4>
      </div>
    );
  }
}

export default Bitcoin2;