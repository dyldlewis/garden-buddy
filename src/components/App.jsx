import React from "react";
import PostInput from "./PostInput"

function App(props){
  var centerAll = {
    textAlign: "center"
  }
  
  return (
    <div style={centerAll}>
      <PostInput/>
    </div>
  );
}

export default App;
