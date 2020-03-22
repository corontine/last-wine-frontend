import React from 'react';
import { useForm } from 'react-hook-form'
import ReactMapboxGl, { Popup, Marker } from 'react-mapbox-gl';
import serialize from 'serialize-javascript';
import Pinpoint from '../images/pinpoint.svg'

import MapComponent from '../components/MapComponent';

const Map = ReactMapboxGl({
  accessToken:'pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q',
});
export default () => {
  const __API_URL__='https://rf8dhrz5ed.execute-api.eu-central-1.amazonaws.com/dev/shops';

  const { register, handleSubmit, watch, errors } = useForm()

  const [submitted, setSubmitted] = React.useState(false);

  const [defCoords, setDefCoords] = React.useState({
    center: [13.402704, 52.51819],
    zoom: [14]
  });

  const [coords, setCoords] = React.useState({
    lng: 13.402704,
    lat: 52.51819
  })

  const getCoords = (e) => {
    // console.log( e.transform.center.lng, e.transform.center.lat)
    setCoords({lng: e.transform.center.lng, lat: e.transform.center.lat })
  }

  const onSubmit = formData => { 
    const data = {
      latitude: coords.lat,
      longitude: coords.lng,
      name: formData.name,
      city: formData.city,
      address: `${formData.address} - ${formData.zipcode}`,
      items: [{
        website: formData.website,
        enabledDelivery: formData.enabledDelivery,
        availableWine: formData.availableWine,
        availableWater: formData.availableWater,
        availableAntipasti: formData.availableAntipasti,
      }],
      hashKey: 115751,
      rangeKey: "xfvgxntu69",
      geohash: "1157514470122841853",
      geoJson: "{\"type\":\"POINT\",\"coordinates\":[123123,123123]}"
		};

		fetch(`${__API_URL__}/create`, {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => {
      // return res.status === 200 ? setSubmitted(!submitted) : ''
      console.log(res)
		}).catch((err) => console.log(err))
  }

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
          <Map style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{ height: "100%", width: "100%"}}
            center={[coords.lng, coords.lat]}
            zoom={defCoords.zoom}
            onMove={getCoords}
          >
            <Marker coordinates={[coords.lng, coords.lat]} anchor="bottom">
              <img src={Pinpoint} className="pinpoint" alt=""/>
            </Marker>
          </Map>
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