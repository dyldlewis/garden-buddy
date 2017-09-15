import React from 'react';
import PropTypes from 'prop-types';



function Plant(props) {
  return(
    <div>
      <h1>{props.plant.name}</h1>
      <p>{props.plant.description}</p>
      <button onClick={() => {props.grandDisplayWaterTime(props.plant)}}>Water</button>
      <p>{props.plant.lastWater}</p>
    </div>

  )
}


Plant.propTypes = {
  plant: PropTypes.object,
  grandDisplayWaterTime: PropTypes.func
}

export default Plant;
