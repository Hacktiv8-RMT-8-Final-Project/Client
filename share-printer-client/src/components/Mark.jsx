import { useState } from "react";
import {
  Marker,
} from "react-google-maps";
import { useHistory } from "react-router";

function Mark ({data, index, handlePlaces}) {
  const history = useHistory()
  const [isSelect, setIsSelect] = useState(false)

  const onClickMarker = (value) => {
    if(isSelect){
      setIsSelect(false)
    } else {
      setIsSelect(true)
    }
    handlePlaces(value)
  }
  
  return (
    <Marker
      position={{ lat: +data.location.lat, lng: +data.location.lng }}
      onClick={() => onClickMarker(data)}
      icon={isSelect ? "" : "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"}
    />
  )
}

export default Mark