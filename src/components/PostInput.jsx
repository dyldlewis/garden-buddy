import React from 'react';
import Plant from '../models/plant'

class PostInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault();
    const { _name } = this.refs;
    const { _description } = this.refs;
    var newPlant = new Plant(_name.value, _description.value);
    this.props.onNewPlantCreation(newPlant);
    _content.value = "";
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
        <h3 style={titleStyle}>Blessed be...</h3>
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
      </div>
    )
  }
}

PostInput.proptypes = {
  onNewPlantCreation: PropTypes.func
}

export default PostInput;
