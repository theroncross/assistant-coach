import React from 'react';
import TimeDisplay from './timedisplay';
import './resultslist.css';

const ResultsList = (props) => {
  const athletes = props.athletes.sort((a, b) => { return a.goal > b.goal });

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
              <td><h2>{athletes[i].name}</h2></td>
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
