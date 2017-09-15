import React from 'react';
import Plant from '../models/plant'
import PropTypes from 'prop-types';
import PlantFeed from "./PlantFeed"

class PostInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: []
    };
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
    this.displayWaterTime = this.displayWaterTime.bind(this);
  }

  displayWaterTime(plant) {
    console.log("hello")
    var newMasterPlantList = this.state.masterPlantList.slice();
    for (var i = 0; i < newMasterPlantList.length; i++) {
      if (newMasterPlantList[i] === plant) {
        newMasterPlantList[i].displayWaterTime();
      }
    }
    this.setState({masterPlantList:newMasterPlantList})
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault();
    const { _name } = this.refs;
    const { _description } = this.refs;
    var newPlant = new Plant(_name.value, _description.value);
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList:newMasterPlantList})

    _name.value = "";
    _description.value = "";
  }

  render() {
    var inputStyle = {
      display: "inline-block",
      marginLeft: "50px",
      width: "65%",
      height: "25px"
    }
    var titleStyle = {
      display: "inline-block",
      marginLeft: "10px"
    }

    return(
      <div>
        <h3 style={titleStyle}>Add a plant to track</h3>
        <form onSubmit={this.handleNewPlantFormSubmission}>
          <input
            style={inputStyle}
            ref="_name"
            type="text"
            id="name"
            placeholder="Name"></input>
            <input
              style={inputStyle}
              ref="_description"
              type="text"
              id="description"
              placeholder="Description"></input>
          <button type="submit">Add</button>
      </form>
      <PlantFeed plantList={this.state.masterPlantList}
        childDisplayWaterTime={this.displayWaterTime}/>
      </div>
    )
  }
}


export default PostInput;
