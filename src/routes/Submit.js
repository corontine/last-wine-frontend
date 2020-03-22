import React from 'react';
import { useForm } from 'react-hook-form'
import { Popup } from 'react-mapbox-gl';

import MapComponent from '../components/MapComponent';

export default () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }


  const [defCoords, setDefCoords] = React.useState({
    center: [13.402704, 52.51819],
    zoom: [14]
  });

  console.log(watch())

  return(
    <main>
      <form className="registration" onSubmit={handleSubmit(onSubmit)}>
        <h1>Submit your restaurant</h1>
        <div className="registration__part">
          <label htmlFor="city">City Name</label>
          <input name="city" defaultValue="test" ref={register} />
        </div>
        <div className="registration__part">
          <label htmlFor="name">Restaurant or Bakery Name</label>
          <input name="name" ref={register({ required: true })} />
        </div>
        <div className="registration__part">
          <label htmlFor="address">Address</label>
          <input name="address" ref={register({ required: true })} />
        </div>
        <div className="registration__part">
          <label htmlFor="zipcode">Zip</label>
          <input name="zipcode" ref={register({ required: true })} />
        </div>
        <div className="registration__part registration__part--map">
          <label htmlFor="website">or you can locate your store</label>
          <MapComponent center={defCoords.center} zoom={defCoords.zoom} width="100%" height="100%"/>
        </div>
        <div className="registration__part">
          <label htmlFor="website">Your Website(facebook, yelp, etc)</label>
          <input name="website" ref={register} />
        </div>
        <div className="registration__part">
          <label htmlFor="phone">Phone Number</label>
          <input name="phone" ref={register} />
        </div>
        <div className="registration__part registration__part--checkbox">
          <label htmlFor="enabledDelivery">Do you want to offer delivery?</label>
          <input name="enabledDelivery"  ref={register} type="checkbox"/>
        </div>
        <div className="registration__part registration__part--checkbox">
          <label htmlFor="availableWine">Is wine available?</label>
          <input name="availableWine"  ref={register} type="checkbox"/>
        </div>
        <div className="registration__part registration__part--checkbox">
          <label htmlFor="avaialableWater">Is water available?</label>
          <input name="avaialableWater"  ref={register} type="checkbox"/>
        </div>
        <div className="registration__part registration__part--checkbox">
          <label htmlFor="avaialableWater">Is anti-pasti available?</label>
          <input name="avaialableAntipasti"  ref={register} type="checkbox"/>
        </div>
        <input type="submit" value="Submit"/>
          {errors.exampleRequired && <span>This field is required</span>}
        </form>
    </main>
  )
}