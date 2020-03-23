import React from 'react';

import glassGreen from '../images/glass-green.png';
import glassYellow from '../images/glass-yellow.png';
import glassRed from '../images/glass-red.png';

import ReactMapboxGl from 'react-mapbox-gl';

import GlassButton from './GlassButton';
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

  const [shops, setShops] = React.useState({ data: [] });

  const getScan = (e) => {
    const prevRadius = parseInt(e.transform.scale / 10);
    const radius = 2500 - prevRadius < 1000 ? 1000 : 3800 - prevRadius;
  
    ScanShops(e.transform.center.lat.toFixed(4), e.transform.center.lng.toFixed(4), radius)
      .then((shopsData)=>{
        setShops(shopsData)
      });
  }

  const selectPopup = (el, attrname) => {
    el.classList.add('selected')
    let allSelections = document.querySelectorAll('[data-selection]');
    let selectedIndex = el.getAttribute(attrname);
    let selected = allSelections[selectedIndex]
    let selectedLng = selected.getAttribute('data-lng')
    let selectedLat = selected.getAttribute('data-lat')
    setDefCoords({center: [selectedLng, selectedLat], zoom:[16]})
    setTimeout(() => {
      allSelections.forEach((item, i) => {
        console.log(i, selectedIndex)
        if(i == selectedIndex) {
          return item.classList.add('selected')
        } else {
          return item.classList.remove('selected');
        }
      })
    }, 50);

      
  }

  const selectFromList = (e) => {
    selectPopup(e.currentTarget,'data-selector' )
  }

  const selectSelf = (e) => {
    selectPopup(e.currentTarget,'data-selection' )
  }

  return (
    <section className="map">
    <Map style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ height: '100vh',width: '100vw'}}
      center={defCoords.center}
      zoom={defCoords.zoom}
      onDragEnd={getScan}
      onZoomEnd={getScan}
      onScrollEnd={getScan}
      onStyleLoad={getScan}
    >
      {
        shops.data.length > 2 &&
          shops.data.map((shop,i) => (
            <div 
              onClick={selectSelf} 
              data-selection={i} 
              key={i} 
              data-lng={shop.longitude} 
              data-lat={shop.latitude} 
              className={`restaurant__wrapper ${i % 4 === 0 ? 'selected' : ''}`}
              >
              <MapLocation phone={shop.phone} name={shop.name} lng={shop.longitude} lat={shop.latitude}/>
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
      <div className="map__utils--list">
        {
          shops.data.length > 2 &&
            shops.data.map((shopListItem,i) => (
              <div  onClick={selectFromList} data-selector={i} key={i*1000} className="map__utils--list-item">
                <h4>{shopListItem.name}</h4>
                <a href={`tel:+${shopListItem.phone}`}>{shopListItem.phone}</a>
              </div>
            ))
        }
      </div>
    </div>
  </section>
  )
}
