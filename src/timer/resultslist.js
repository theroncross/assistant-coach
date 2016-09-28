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
            <TimeDisplay time={result} />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => ({ results: state.timer.results });

export default connect(mapStateToProps)(ResultsList);
