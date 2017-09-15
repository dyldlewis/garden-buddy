import React from "react";
import Moment from "moment";


class Plant {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.lastWater = "";
    this.displayWaterTime = this.displayWaterTime.bind(this);
  }


  displayWaterTime() {
    this.lastWater = new Moment().format('MM/DD/YYYY')
  }
}

export default Plant;
