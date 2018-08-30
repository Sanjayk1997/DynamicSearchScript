import React , { Component } from 'react';
import './navbar.css'


class Navbar extends Component{


  handleChange = (e) =>{
    this.props.search(e.target.value);
  }

  render(){
    return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div className = "container">
        <form className="form-inline">
           <input className="form-control mr-sm-2"
             type="text" placeholder="Search" onChange = { this.handleChange }/>
        </form>
      </div>
      </nav>

    );
  }
}

export default Navbar;
