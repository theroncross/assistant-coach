import React from 'react';
import TimesList from './timeslist';
import AthletesList from './athleteslist';
import './resultslist.css';

const ResultsList = (props) => {
  const { results, athletes } = props;
  return (
    <div className="results-list">
      <AthletesList athletes={athletes} />
      <TimesList times={results} />
    </div>
  );
}

export default ResultsList;
