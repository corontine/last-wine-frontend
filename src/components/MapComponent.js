import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import Pinpoint from '../images/pinpoint.svg'

const Map = ReactMapboxGl({
  accessToken:'pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q',
});


export default (props) => {

  const popupOffset = {
    'bottom-left': [2, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  }

  const [coords, setCoords] = React.useState({
    lng: 13.402704,
    lat: 52.51819
  })

  const getCoords = (e) => {
    setCoords({lng: e.transform.center.lng, lat: e.transform.center.lat })
  }
  return(
    <>
    {
      props.full
      ? (
        <Map style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{ height: '100vh',width: '100vw'}}
          center={props.center}
          zoom={props.zoom}
        >
        {props.children}
      </Map>
      ) : (
        <Map style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{ height: props.height, width: props.width}}
          center={props.center}
          zoom={props.zoom}
          onMove={getCoords}
        >
        {props.children}
        <Marker coordinates={[coords.lng, coords.lat]} anchor="bottom">
          <img src={Pinpoint} className="pinpoint" alt=""/>
        </Marker>
      </Map>
      )
    }
    </>
  )
}