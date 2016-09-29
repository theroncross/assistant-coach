import React from 'react';
import { connect } from 'react-redux';
import Stopwatch from './stopwatch';
import ResultsList from './resultslist'

const Timer = (props) => {
  return (
    <div>
      <Stopwatch />
      <ResultsList results={props.results} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  results: state.timer.results,
})

export default connect(mapStateToProps)(Timer);
