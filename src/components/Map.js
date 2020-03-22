import React from 'react';

import glassGreen from '../images/glass-green.png';
import glassYellow from '../images/glass-yellow.png';
import glassRed from '../images/glass-red.png';

import ReactMapboxGl from 'react-mapbox-gl';

import GlassButton from './GlassButton';
// import MapComponent from './MapComponent';
import MapLocation from './MapLocation';

import {ScanShops} from '../api/LastWine';

const images = [ glassGreen, glassYellow, glassRed];
const imageTexts = ['A lot', 'Middle', 'Low'];

const Map = ReactMapboxGl({
  accessToken:'pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q',
});

export default () => {

  const [defCoords, setDefCoords] = React.useState({
    center: [13.402704, 52.51819],
    zoom: [14]
  });

  const [shops, setShops] = React.useState({
    data: []
  });

  const [coords, setCoords] = React.useState({
    lng: 13.402704,
    lat: 52.51819
  })

  const mapContainer = React.useRef();

  const getCoords = (e) => {
    setCoords({lng: e.transform.center.lng, lat: e.transform.center.lat })
  }

  const getScan = (e) => {
    console.log(e.transform.zoom)
    ScanShops(e.transform.center.lat.toFixed(4), e.transform.center.lng.toFixed(4),"450")
      .then((shopsData)=>{
        setShops(shopsData)
        console.log(shopsData)
      });
  }

  React.useEffect(() => {
    mapContainer.current.scrollY = 10
  }, [defCoords])

  return (
    <section className="map">
    <Map style="mapbox://styles/mapbox/streets-v9"
      ref={mapContainer}
      containerStyle={{ height: '100vh',width: '100vw'}}
      center={defCoords.center}
      zoom={defCoords.zoom}
      // onMove={getScan}
      onDragEnd={getScan}
      onScrollEnd={getScan}
      onStyleLoad={getScan}
    >
      {
        shops.data.length > 2 &&
          shops.data.map((shop,i) => (
            <div className="restaurant__wrapper">
              <MapLocation key={i} tel={shop.tel} name={shop.name} lng={shop.longitude} lat={shop.latitude}/>
            </div>
          ))
      }
    </Map>
    <div className="map__utils">
      <div className="map__utils--search">
        <input type="search" name="searchstore" placeholder="Search for restaurant" id="searchstore"/>
        <div className="map__utils--search-button">
          <input type="submit" value=""/>
        </div>
      </div>
      <div className="map__utils--glasses">
        {
          images.map((image, i) => (
            <GlassButton key={i} color={image} text={imageTexts[i]}/>
          ))
        }
      </div>
    </div>
  </section>
  )
}
