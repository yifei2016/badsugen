import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import ShowList from './ShowList';
import fb from './fb';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      swimmingPlaces: [],
      inputValue: '',
      text: '',
      icon: ''
    }
    this.showPlaces = this.showPlaces.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({
      inputValue: event.target.value
    })
  }
  showPlaces(){

    // var list = [
    //   {
    //     name: 'Unikum Tattoo',
    //     lat: 57.70887,
    //     lng: 11.974560,
    //     address: 'Norra Allégatan 7, 413 01 Gothenburg'
    //   },
    //   {
    //     name: 'Delsjöbadet',
    //     lat: 57.697586,
    //     lng: 12.055119,
    //     address: 'Delsjön, 416 55 Gothenburg'
    //   },
    //   {
    //     name: 'Hammars Badplats',
    //     lat: 57.719148,
    //     lng: 11.927709,
    //     address: 'Lantmannagatan 5, 417 15 Gothenburg'
    //   },
    //   {
    //     name: 'Lundbybadet',
    //     lat:57.712153,
    //     lng: 11.914332,
    //     address: 'Lundby, 416 34 Gothenburg'
    //   },
    //     {
    //       name: 'Valhallabadet',
    //       lat: 57.699915,
    //       lng: 11.990632,
    //       address: 'Valhallagatan 3, 412 51 Gothenburg'
    //     },
    //     {
    //       name: 'Badbryggan',
    //       lat: 59.372537,
    //       lng: 18.068322,
    //       address: ' Lektorsstigen, 114 17 Stockholm'
    //     },
    //     {
    //       name: 'Farsta strandbad',
    //       lat: 59.237402,
    //       lng: 18.085330,
    //       address: 'Farsta strandbad, 123 46 Stockholm'
    //     },
    //     {
    //       name: 'Simhall Aquasund',
    //       lat: 55.598632,
    //       lng:13.010958,
    //       address: 'Hantverkaregatan 5, 211 55 Malmö'
    //     }
    // ]
    // list.forEach(place=>{
    //   fb.ref('places').push().set(place) //add data to firebase let fb decide key, inside set must be a object
    // })
    var self = this;
    fb.ref('places/').once('value')
    .then(function(snapshot){
      var a = snapshot.val()
      var places = Object.keys(a).map(function(x){return a[x] });
      self.setState({
        swimmingPlaces: places
      })
    });

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=2d3055ddb7941ccc16f48f3aaeb29121&units=metric`)
     .then(function(res){
       return res.json();
     }) //chain
     .then(function(data){
       var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png";
       return self.setState({
         text: `windSpeed: ${data.wind.speed},temperature: ${data.main.temp}`,
         icon: iconUrl
       }) ;
     });
  }

  render() {
    return (
      <div>
      <div className="input-group">
      <input type="text" value={this.state.inputValue} onChange={this.handleInput} className="form-control" placeholder="Search for swimming places" />
      <button onClick={this.showPlaces} className="btn btn-success" type="button">Go!</button>
      </div>
      <p>{this.state.text}<img src={this.state.icon}/></p>
      <div style={{marginTop:'5%', width: '100%', height: '400px'}}>
            <Map list={this.state.swimmingPlaces} />
            <ShowList list={this.state.swimmingPlaces} />
      </div>
      </div>
    );
  }
}

export default App;
