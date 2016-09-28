import React from 'react';
import Stopwatch from './stopwatch';
import ResultsList from './resultslist'

const Timer = (props) => {
  return (
    <div>
      <Stopwatch />
      <ResultsList />
    </div>
  )
}

export default Timer;