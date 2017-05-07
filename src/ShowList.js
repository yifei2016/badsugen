import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class ShowList extends React.Component {

  render() {
    const newList = this.props.list.map(place=>
      <Item key={place.address}
      name={place.name} address={place.address}/>
     )
    return (
      <ul style={{marginTop: '5%'}}>
      {newList}
      </ul>
    );
  }
}
class Item extends React.Component {
  render(){
    return <li style={{color:'#9370DB', marginTop: '2%'}}>{this.props.name}: {this.props.address}</li>
  }
}

export default ShowList;
