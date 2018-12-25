import React, { Component } from 'react';

let savedRef = null;

class App extends Component {
  constructor () {
    super();
    this.flipper = false;
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick () {
    console.log('click');
    if (this.flipper) {
      savedRef.width = 854;
      savedRef.height = 480;
      savedRef.src = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
    } else {
      savedRef.width = 1280; 
      savedRef.height = 720;
      savedRef.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    }
    this.flipper = !this.flipper;
  }

  render() {
    if (savedRef) {
      return {savedRef};
    } else {
      return (
        <div>
          <video width="854" height="480" controls autoPlay muted ref={ref=>savedRef = ref}>
            <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></source>
          </video>
          <br />
          <button onClick={this.handleOnClick}>Swap Movies</button>
        </div>
      );
    }
  }

  componentDidMount() {
    console.log('componentDidMount', savedRef);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', savedRef);
  }
}

export default App;