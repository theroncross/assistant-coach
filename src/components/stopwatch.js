import React, { Component } from 'react';
import TimeDisplay from './timedisplay';
import { connect } from 'react-redux';
import { addTime } from '../actions';
import '../stylesheets/stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: 0,
      running: false,
      athletesRemaining: this.props.athleteCount,
      intervalId: null,
      label: 'START'
    };

    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.athletesRemaining = this.athletesRemaining.bind(this);
    this.handleTiming = this.handleTiming.bind(this);
  }

  tick() {
    this.setState({ elapsedTime: this.state.elapsedTime + 1 });
  }

  start() {
    this.setState({ running: true, label: 'LAP' });
    return window.setInterval(this.tick, 100);
  }

  stop() {
    this.setState({ running: false, label: 'RESET' });
    window.clearInterval(this.state.intervalId);
  }

  reset() {
    this.setState({ elapsedTime: 0, label: 'START' })
  }

  athletesRemaining() {
    this.setState({ athletesRemaining: this.props.athleteCount - this.props.timeCount });
  }

  handleTiming() {
    if(!this.state.running && this.state.athletesRemaining > 0) {
      const intervalId = this.start();
      this.setState({ intervalId });
    }
    if(this.state.running && this.state.athletesRemaining > 2) {
      this.props.recordTime(this.state.elapsedTime);
    }
    if(this.state.running && this.state.athletesRemaining === 2) {
      this.props.recordTime(this.state.elapsedTime);
      this.setState({ label: 'STOP' });
    }
    if(this.state.running && this.state.athletesRemaining < 2) {
      this.stop();
    }
    if(!this.state.running && !this.state.athletesRemaining) {
      this.reset();
    }
    this.athletesRemaining();
  }

  render() {
    return (
      <div>
        <div onClick={this.handleTiming} className="stopwatch">
          <h3 className="stopwatch__label">{this.state.label}</h3>
          <TimeDisplay time={this.state.elapsedTime} className="stopwatch__timedisplay" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    athleteCount: state.timing.athletes.length,
    timeCount: state.timing.recordedTimes.length
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    recordTime: (time) => dispatch(addTime(time)),
  }
};

Stopwatch = connect(mapStateToProps, mapDispatchToProps)(Stopwatch);

export default Stopwatch;
