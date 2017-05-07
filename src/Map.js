import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GoogleMapReact from 'google-map-react';


const Marker = ({ name }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {name}
  </div>
);
class Map extends React.Component {
  static defaultProps = {
    center: {lat: 57.708870, lng: 11.974560},
    zoom: 11
  };

  render() {
    const newList = this.props.list.map(place=>
      <Marker key={place.address}
      lat={place.lat}
      lng={place.lng}
      name={place.name}
     />)
    return (
      <GoogleMapReact
       defaultCenter={this.props.center}
       defaultZoom={this.props.zoom}
     >{newList}
     </GoogleMapReact>
    );
  }
}

export default Map;
