import React from 'react';
import { Popup } from 'react-mapbox-gl';

import glassgreen from '../images/glass-green.png';
import glassyellow from '../images/glass-yellow.png';
import glassred from '../images/glass-red.png';

export default (props) => {
  const popupOffset = {
    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  }
  return (
    <Popup coordinates={[13.402704, 52.51819]} offset={popupOffset}>
      <article className="restaurant__popup">
        <h3>Cento Passi Wine Bar</h3>
        <p>Free delivery in Berlin on 12+ bottles.</p>
        <cite>Availability: <strong>Low</strong><img src={glassred} alt=""/> </cite>
        <a href="/restaurants/centro-passi-wine-bar">View and order</a>
      </article>
    </Popup>
  )
}