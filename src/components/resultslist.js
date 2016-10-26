import React from 'react';
import { connect } from 'react-redux';
import { saveResults } from '../middlewares';
import TimesList from './timeslist';
import AthletesList from './athleteslist';
import './resultslist.css';

const ResultsList = (props) => {
  const { times, athletes, handleSave } = props;
  return (
    <div className="results-list">
      <AthletesList athletes={athletes} />
      <TimesList times={times} />
      <button onClick={() => handleSave({ athletes, times })}>Save</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    handleSave(results) { dispatch(saveResults(results)) }
});

export default connect(null, mapDispatchToProps)(ResultsList);
