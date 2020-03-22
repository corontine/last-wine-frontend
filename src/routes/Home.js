import React from 'react';
import EntranceImg from '../images/entrance.png';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <section className="entrance">
      <img src={EntranceImg} alt="Welcome"/>
      <div className="entrance__text">
        <h2>Save Berlin restaurants by buying their wine!</h2>
        <p>Your local restaurant has thousands of euros of food and beverage inventory sitting in their cellars. Help them stay alive by buying it!</p>
      </div>
      <div className="entrance__buttons">
        <Link to="/map">View restaurant map</Link>
        <Link to="/submit">Submit a restaurant</Link>
      </div>
    </section>
  )
}