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
    this.lastWater = "hello";
    console.log("hello");
    return this.lastWater;
  }
}

export default Plant;
