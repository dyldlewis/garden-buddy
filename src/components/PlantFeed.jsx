import React from "react";
import PropTypes from 'prop-types';
import Plant from "./Plant"


function PlantFeed(props) {

  return (
    <div>
      {props.plantList.map((plant, index) =>
        <Plant
          key={index}
          plant={plant}
          grandDisplayWaterTime={props.childDisplayWaterTime}/>
      )}
    </div>
  );
}

PlantFeed.propTypes = {
  plantList: PropTypes.array,
  childDisplayWaterTime: PropTypes.func
}

export default PlantFeed;
