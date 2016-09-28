import React, { Component } from 'react';
import TimeDisplay from './timedisplay';
import { connect } from 'react-redux';
import { addResult } from '../actions';
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
    this.label = this.label.bind(this);
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

  label() {
    let buttonLabel;
    if(!this.state.running) buttonLabel = 'START';
    else if(!this.state.allRunnersFinished) buttonLabel = 'LAP';
    else buttonLabel = 'STOP';
    return buttonLabel;
  }

  handleTiming() {
    if(!this.state.running) {
      const intervalId = this.start();
      this.setState({ intervalId });
    } else if(this.state.allRunnersFinished) {
      this.stop();
    } else {
      this.props.recordTime(this.state.elapsedTime);
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.handleTiming} className="stopwatch">
          <h3 className="stopwatch-label">{this.label()}</h3>
          <TimeDisplay time={this.state.elapsedTime} className="stopwatch-timedisplay" />
        </div>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recordTime: (time) => {
      dispatch(addResult(time));
    }
  }
}

Stopwatch = connect(null, mapDispatchToProps)(Stopwatch);

export default Stopwatch;
