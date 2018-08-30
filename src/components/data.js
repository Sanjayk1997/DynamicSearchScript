import React , { Component } from 'react';
import data from './jsonData'


class Data extends Component{

  limitData = (array) =>{
    var count = 0;
    for (var i = 0; i<array.length ; i++){
      if(array[i] !== null){
        count++;
    }
    }
    if(count >= 50){
      return array.slice(0,50);
    }
    else {
      return array;
    }
  }




render(){
    const string = this.props.search.searchStr;
    const listItems = data;
    const list = listItems.map((list,index) => {
        if((list.firstname.includes(string))||(list.email.includes(string))){
          return <tr key = {index}><td><div>{list.firstname}</div>
                    <div>{list.lastname}</div>
                    <div>{list.email}</div>
                    <div>{list.agency_name}</div></td></tr>;
        }
        else {
          return (null);
        }
      }
    )

  return(
      <div className = "container">
        <table className = "table table-bordered">
          <tbody>{ this.limitData(list) }</tbody>
        </table>
      </div>

    );
  }

}

export default Data;
