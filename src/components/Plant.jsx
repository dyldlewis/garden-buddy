import React from 'react';
import PropTypes from 'prop-types';



function Plant(props) {
  return(
    <div>
      <h1>{props.plant.name}</h1>
      <p>{props.plant.description}</p>
    </div>

  )
}


Plant.propTypes = {
  plant: PropTypes.object
}

export default Plant;
