import React from 'react';
import TimeDisplay from './timedisplay';
import AthleteCard from './athleteCard';
import './resultslist.css';

const ResultsList = (props) => {
  return (
    <table className="results-list">
      <thead>
        <tr>
          <th>Result</th>
          <th>Name</th>
          <th>Off by</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, i) => {
          return (
            <tr key={i} className="results-list__list-item">
              <td>
                <TimeDisplay
                  time={result}
                  className="results-list__timedisplay"
                />
              </td>
              <td>
                <AthleteCard
                  athlete={props.athletes[i]}
                  place={i}
                />
              </td>
              <td>
                <TimeDisplay
                  time={result - props.athletes[i].goal}
                  className="results-list__timedisplay"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsList;
