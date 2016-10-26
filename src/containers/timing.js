import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAthletes, saveResults } from '../middlewares';
import Stopwatch from '../components/stopwatch';
import ResultsList from '../components/resultslist'

class Timing extends Component {
  componentDidMount() {
    const { athletes, getAthletes } = this.props;
    if(athletes.length === 0) getAthletes('/api')
  }

  render() {
    const { athletes, times, handleSave } = this.props;
    return (
      <main>
        <Stopwatch />
        <ResultsList athletes={athletes} times={times} />
        <button onClick={() => handleSave({ athletes, times })}>Save</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { athletes, recordedTimes } = state.timing;
  return { athletes, times: recordedTimes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAthletes: (url) => dispatch(fetchAthletes(url)),
    handleSave: (results) => dispatch(saveResults(results))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timing);
