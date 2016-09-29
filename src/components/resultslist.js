import React from 'react';
import { connect } from 'react-redux';
import TimeDisplay from './timedisplay';
import './resultslist.css';

const ResultsList = (props) => {
  return (
    <ul className="results-list">
      {props.results.map((result, i) => {
        return (
          <li key={i} className="results-list__list-item">
            <h3>{props.athletes[i].name}</h3>
            <TimeDisplay time={result} />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    results: state.timer.results,
    athletes: state.timer.athletes.sort((a, b) => { return a.fastestTime > b.fastestTime })
  }
}

export default connect(mapStateToProps)(ResultsList);
