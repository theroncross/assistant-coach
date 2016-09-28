import React, { Component } from 'react';
import Timer from './timer/timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer allRunnersFinished={false} />
      </div>
    );
  }
}

export default App;
