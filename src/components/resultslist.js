import React from 'react';
import TimesList from './timeslist';
import AthletesList from './athleteslist';
import './resultslist.css';

const ResultsList = (props) => {
  return (
    <div className="results-list">
      <AthletesList athletes={props.athletes} />
      <TimesList times={props.times} />
    </div>
  );
}

export default ResultsList;