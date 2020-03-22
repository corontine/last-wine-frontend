import React from 'react';

export default (props) => {
  return(
    <button className="map__utils--glasses-button">
      <img src={props.color} alt={props.text}/>
      <span>{props.text}</span>
    </button>
  )
}