import React, { Component } from 'react';
import './stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: 0,
      allRunnersFinished: this.props.allRunnersFinished,
      running: false,
      intervalId: null
    };
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.handleTiming = this.handleTiming.bind(this);
  }

  tick() {
    this.setState({ elapsedTime: this.state.elapsedTime + 1});
  }

  start() {
    this.setState({ running: true });
    return window.setInterval(this.tick, 100);
  }

  stop() {
    this.setState({ running: false });
    window.clearInterval(this.state.intervalId);
  }

  reset() {
    this.stop();
    this.setState({ elapsedTime: 0 })
  }

  handleTiming() {
    if(!this.state.running) {
      const intervalId = this.start();
      this.setState({ intervalId });
    } else if(this.state.allRunnersFinished) {
      this.stop();
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.handleTiming} className="stopwatch">
          {this.state.elapsedTime}
        </div>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Stopwatch;
