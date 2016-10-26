import React from 'react';
import { connect } from 'react-redux';
import { fetchAthletes, fetchResult } from '../middlewares';
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
      <ul>
        {props.results.map(result => {
          return (
            <li key={result} onClick={() =>props.getResult(result)}>
              {result}
            </li>
          )}
        )}
      </ul>
      <ResultsList
        times={props.pastResult.times}
        athletes={props.pastResult.athletes}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  times: state.timer.unsavedTimes,
  athletes: state.timer.athletes,
  results: state.timer.results,
  pastResult: state.timer.pastResult
})

const mapDispatchToProps = (dispatch) => {
  return {
    getAthletes: (url) => dispatch(fetchAthletes(url)),
    getResult: (id) => dispatch(fetchResult(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
