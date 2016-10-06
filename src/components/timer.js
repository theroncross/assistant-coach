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
        results={props.results}
        athletes={props.athletes}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  results: state.timer.results,
  athletes: state.timer.athletes
})

const mapDispatchToProps = (dispatch) => {
  return { getAthletes: (url) => dispatch(fetchAthletes(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
