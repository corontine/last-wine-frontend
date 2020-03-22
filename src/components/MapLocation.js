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
    <Popup coordinates={[props.lng.toFixed(4), props.lat.toFixed(4)]} offset={popupOffset}>
      <article className="restaurant__popup">
        <h3>{props.name}</h3>
        <p>Free delivery in Berlin on 12+ bottles.</p>
        <a href={`tel:+${props.phone}`}>{props.phone}</a>
        <p>{props.address}</p>
        <cite>Availability: <strong>Low</strong><img src={glassred} alt=""/> </cite>
        <a href="/restaurants/centro-passi-wine-bar">View and order</a>
      </article>
    </Popup>
  )
}