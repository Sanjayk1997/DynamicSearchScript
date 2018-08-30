import React , { Component } from 'react';
import './header.css'

class Header extends Component {

  render(){
    return(
        <div className = 'head col-12'>
          <h2 className = 'container'>Search for Contacts!</h2>
          <h6 className = 'container'>Enter Name or Email in the search field:</h6>
        </div>

    );
  }
}

export default Header;
