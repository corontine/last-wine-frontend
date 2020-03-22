import React, {useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import glassGreen from '../images/glass-green.png';
import glassYellow from '../images/glass-yellow.png';
import glassRed from '../images/glass-red.png';

import GlassButton from './GlassButton';
import {ScanShops} from "../api/LastWine";

const images = [ glassGreen, glassYellow, glassRed];
const imageTexts = ['A lot', 'Middle', 'Low'];

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q'
});

export default () => {
  const [shops, setShops] = useState([]);

  useEffect(()=> {
    ScanShops("52.50","13.40","30000")
      .then((shopsData )=>setShops(shopsData));

  }, [shops]);

  return (
    <section className="map">
      <Map style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
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
