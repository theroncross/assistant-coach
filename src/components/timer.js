import React from 'react';
import { connect } from 'react-redux';
import { fetchAthletes } from '../middlewares';
import Stopwatch from './stopwatch';
import ResultsList from './resultslist'

const Timer = (props) => {
  if(props.athletes.length === 0) props.getAthletes('/api')

  return (
    <div>
      <Stopwatch />
      <ResultsList
        times={props.times}
        athletes={props.athletes}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  times: state.timer.unsavedTimes,
  athletes: state.timer.athletes
})

const mapDispatchToProps = (dispatch) => {
  return { getAthletes: (url) => dispatch(fetchAthletes(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
