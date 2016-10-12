import React from 'react';
import { connect } from 'react-redux';
import { saveResults } from '../actions';
import TimesList from './timeslist';
import AthletesList from './athleteslist';
import './resultslist.css';

const ResultsList = (props) => {
  const { times, athletes, handleSave } = props;
  return (
    <div className="results-list">
      <AthletesList athletes={athletes} />
      <TimesList times={times} />
      <button onClick={handleSave} >Save</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleSave() { dispatch(saveResults()) }
});

export default connect(null, mapDispatchToProps)(ResultsList);
