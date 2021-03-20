import { useEffect, useState } from "react";
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Mark from './Mark'

function Map({setLocate, marker, selfCoordinate}) {
  // const [places, setPlaces] = useState([])

  // const [center, setCenter] = useState(selfCoordinate)

  // useEffect(() => {
  //   if(Object.keys(selfCoordinate).length){
  //     setCenter(selfCoordinate)
  //   }
  // }, [selfCoordinate])

  const handlePlaces = (value) => {
    setLocate(value)
  }

  console.log(selfCoordinate)


  // const addMarker = (e) => {
  //   const newPlace = { id: places.length, lat: e.latLng.lat(), lng: e.latLng.lng() };
  //   setPlaces([...places, newPlace])
  //   // setLocate(newPlace)
  // }

  if(!Object.keys(selfCoordinate).length) return <div>You Have To Allow the Location permission</div>

  else {
    return (
      <>
          <GoogleMap
            // onClick={addMarker.bind(this)}
            defaultZoom={16}
            defaultCenter={selfCoordinate}
          >
          <Marker 
            position={{ lat: selfCoordinate.lat, lng: selfCoordinate.lng }}
          />
          {marker.map((place, index) => {
            return (
              <>
                <Mark data={place} key={index} handlePlaces={handlePlaces} />
              </>
            );
          })}
        </GoogleMap>
      </>
    )
  }
    
}

export default withScriptjs(withGoogleMap(Map));