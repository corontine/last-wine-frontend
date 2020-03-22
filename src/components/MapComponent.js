import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:'pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q',
});


export default (props) => {
  const popupOffset = {
    'bottom-left': [2, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  }
  return(
    <Map 
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ height: '100vh',width: '100vw'}}
      center={props.center}
      zoom={props.zoom}
      onMove={props.getScan}
    >
      {props.children}
    </Map>

  )
}