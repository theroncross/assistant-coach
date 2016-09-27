import React, { Component } from 'react';
import Stopwatch from './timer/stopwatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch allRunnersFinished={true} />
      </div>
    );
  }
}

export default App;
