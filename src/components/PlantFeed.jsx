import React from "react";
import PropTypes from 'prop-types';
import Plant from "/.Plant"


function PlantFeed(props) {

  return (
    <div>
      {props.plantList.map((plant, index) =>
        <Plant
          key={index}
          plant={plant}/>
      )}
    </div>
  );
}

PlantFeed.propTypes = {
  plantList: PropTypes.array
}

export default PlantFeed;
