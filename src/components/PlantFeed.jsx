import React from "react";
import PropTypes from 'prop-types';
import Plant from "./Plant"


function PlantFeed(props) {
var headerStyle = {
  color: "#8B4513"
}
var header = ""
if (props.plantList.length > 0 ) {
  header = <h1 style={headerStyle}>Your Plants</h1>
}

  return (
    <div>
      {header}
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
