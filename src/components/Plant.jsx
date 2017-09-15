import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Plant(props) {

  var plantNameStyle = {
    color: "green",
    fontStyle: "italic"
  }

  var boxStyle = {
    border: "solid lightgrey 1px",
    margin: "50px"
  }

  return(
    <div style={boxStyle}>
      <h1 style={plantNameStyle}>{props.plant.name}</h1>
      <p>{props.plant.description}</p>
      <Button bsStyle="info" onClick={() => {props.grandDisplayWaterTime(props.plant)}}>Mark as watered</Button>
      <p>{props.plant.lastWater}</p>
    </div>

  )
}


Plant.propTypes = {
  plant: PropTypes.object,
  grandDisplayWaterTime: PropTypes.func
}

export default Plant;
