import React from 'react';


export default (props) => {
  const pageClass = props.title.toLowerCase();
  return(
    <main className={`${pageClass}`}>
      <div className={`${pageClass}__text`}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className={`${pageClass}__image`} style={{backgroundImage: `url(${props.background})`}}/>
    </main>
  )
}