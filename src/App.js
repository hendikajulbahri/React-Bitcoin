import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Bitcoin1 from './Bitcoin1'
import Bitcoin2 from './Bitcoin2'
import Bitcoin3 from './Bitcoin3'


class App extends Component {
  render() {
    return (
      <div className="App tombol">
      <Link to="/bitcoin1"><button className="btn btn-success">Bitcoin Hari Ini</button></Link>
      <Link to="/bitcoin2"><button className="btn btn-success">Rupiah Ke Bitcoin</button></Link>
      <Link to="/bitcoin3"><button className="btn btn-success">Bitcoin ke Rupiah</button></Link>

      <div className="hasil1">
      <Route path="/bitcoin1" component={Bitcoin1}/>
      <Route path="/bitcoin2" component={Bitcoin2}/>
      <Route path="/bitcoin3" component={Bitcoin3}/>
        {/* <Bitcoin1/> */}
        </div>
      </div>
    );
  }
}

export default App;
