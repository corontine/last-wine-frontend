import React from 'react';

import glassGreen from '../images/glass-green.png';
import glassYellow from '../images/glass-yellow.png';
import glassRed from '../images/glass-red.png';

import GlassButton from './GlassButton';
import MapComponent from './MapComponent';
import MapLocation from './MapLocation';

const images = [ glassGreen, glassYellow, glassRed];
const imageTexts = ['A lot', 'Middle', 'Low'];


export default () => {

  const [defCoords, setDefCoords] = React.useState({
    center: [13.402704, 52.51819],
    zoom: [14]
  });

  const [shops, setShops] = useState([]);

  useEffect(()=> {
    ScanShops("52.50","13.40","30000")
      .then((shopsData )=>setShops(shopsData));

  }, []);


  return (
    <section className="map">
    <MapComponent full="true" center={defCoords.center} zoom={defCoords.zoom}>
      <MapLocation/>
    </MapComponent>
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
