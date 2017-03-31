import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {
  _onReady(e) {
    // access to player in all event handlers via event.target
    console.log("ready")
    // e.target.playVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const id = 'e-5obm1G_FY'

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <YouTube
          videoID={id}
          opts={opts}
          onReady={this._onReady}
        /> 
      </div>
    );
  }
}

export default App;
