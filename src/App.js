import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Data from './components/data';
import Header from './components/header'

class App extends Component {


  state = {
    searchStr : "",
  }

  searchParam = (data) => {
    this.setState({
      searchStr : data
    });
  }


    render(){
      return (
        <div>
          <Header />
          <Navbar search = {this.searchParam}/>
          <Data search = {this.state}/>
        </div>
      );
    }
  }


export default App;
