import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'

class Bitcoin1 extends Component {
    constructor(){
        super();
        this.state={
            bit: ''
        }
    }

    componentDidMount(){
        axios.get('https://blockchain.info/ticker')
        .then((ambil)=>{
            console.log(ambil)
            this.setState({bit: ambil.data})
            
           
        })
 
    }
    
    


  render() {

    


        // .then((z)=>{
        //   console.log(z)
          
        //   this.setState({cuaca: z.data})
       
    //     })
    //     .catch((z)=>{console.log(z)})
      




    return (
      <div> 
{/* <table>
            <thead>
                <tr>
                    <th>Mata Uang</th>
                    <th>Harga Beli Bitcoin</th>
                    <th>Harga Jual Bitcoin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dollar Australia</td>
                    <td>{this.state.bit ? this.state.bit.AUD.buy : ''}</td>
                    <td>{this.state.bit ? this.state.bit.AUD.sell : ''}</td>
                </tr>
                <tr>
                    <td>Euro Eropa</td>
                    <td>{this.state.bit ? this.state.bit.EUR.buy : ''}</td>
                    <td>{this.state.bit ? this.state.bit.EUR.sell : ''}</td>
                </tr>
                <tr>
                    <td>Poundstreling Inggris</td>
                    <td>{this.state.bit ? this.state.bit.GBP.buy : ''}</td>
                    <td>{this.state.bit ? this.state.bit.GBP.sell : ''}</td>
                </tr>
                <tr>
                    <td>Yen Jepang</td>
                    <td>{this.state.bit ? this.state.bit.JPY.buy : ''}</td>
                    <td>{this.state.bit ? this.state.bit.JPY.sell : ''}</td>
                </tr>

                 <tr>
                    <td>Dollar Amerika</td>
                    <td>{this.state.bit ? this.state.bit.USD.buy : ''}</td>
                    <td>{this.state.bit ? this.state.bit.USD.sell : ''}</td>
                </tr>
            </tbody>
        </table> */}



          {/* <h1>coba</h1>

         <p className="text-center">Bitcoin : {this.state.bit ? this.state.bit.AUD.buy  : ''}</p>
         <p className="text-center">Bitcoin : {this.state.bit ? this.state.bit.AUD.last  : ''}</p>
         <p className="text-center">Bitcoin : {this.state.bit ? this.state.bit.AUD.symbol : ''}</p> */}

    <center><h1>
    
     Bitcoin Hari Ini    
    </h1></center>
<table class="table table-dark tabel">
  <thead>
    <tr>
      <th className="induktabel" scope="col">Mata Uang</th>
      <th className="induktabel"  scope="col">Harga Beli Bitcoin</th>
      <th className="induktabel"  scope="col">Harga Jual Bitcoin</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Dollar Australia</th>
      <td>{this.state.bit ? this.state.bit.AUD.buy : ''}</td>
      <td>{this.state.bit ? this.state.bit.AUD.sell : ''}</td>
      
    </tr>
    <tr>
      <th scope="row">Euro Eropa</th>
      <td>{this.state.bit ? this.state.bit.EUR.buy : ''}</td>
      <td>{this.state.bit ? this.state.bit.EUR.sell : ''}</td>
      
    </tr>
    <tr>
      <th scope="row">Poundstreling Inggris</th>
      <td>{this.state.bit ? this.state.bit.GBP.buy : ''}</td>
      <td>{this.state.bit ? this.state.bit.GBP.sell : ''}</td>
      
    </tr>

       <tr>
      <th scope="row">Yen Jepang</th>
      <td>{this.state.bit ? this.state.bit.JPY.buy : ''}</td>
      <td>{this.state.bit ? this.state.bit.JPY.sell : ''}</td>
      
    </tr>

       <tr>
      <th scope="row">Dollar Amerika</th>
      <td>{this.state.bit ? this.state.bit.USD.buy : ''}</td>
      <td>{this.state.bit ? this.state.bit.USD.sell : ''}</td>
      
    </tr>
  </tbody>
</table>

          </div>
      
    );
  }
}

export default Bitcoin1;