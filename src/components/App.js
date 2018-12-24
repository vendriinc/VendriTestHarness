import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <video width="640" height="480" controls>
        <source src="../../media/skrillex.mp4" type="video/mp4"></source>
      </video> 
    )
  }
}

export default App;