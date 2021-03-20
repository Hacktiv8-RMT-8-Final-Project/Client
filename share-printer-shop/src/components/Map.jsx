import { useState } from "react";
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";

function Map({setLocate}) {
  const [place, setPlace] = useState(null)

  const [center, setCenter] = useState({
    lat: -6.2,
    lng: 106.8
  })

  const addMarker = (e) => {
    const newPlace = {lat: e.latLng.lat(), lng: e.latLng.lng()};
    // setPlaces([...places, newPlace])
    setPlace(newPlace)
    setLocate(JSON.stringify(newPlace))
   }

   return (
     <>
        <GoogleMap
          onClick={addMarker.bind(this)}
          defaultZoom={16}
          defaultCenter={center}
        >
          {/* {places?.map(place => {
            return (
              <Marker
                key={place.id}
                position={{ lat: place.lat, lng: place.lng }}
              />
            );
          })} */}
            <Marker position={place ? {lat:place?.lat, lng: place?.lng} : '' } />
        </GoogleMap>
    </>
  )
}

export default withScriptjs(withGoogleMap(Map));