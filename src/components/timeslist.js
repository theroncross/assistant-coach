import React from 'react';
import TimeDisplay from './timedisplay';

const TimesList = (props) => {
  return (
    <ul className="times-list">
      {props.times.map((time, i) => {
        return (
          <li key={i}>
            <TimeDisplay className="results-list__timedisplay" time={time}/>
          </li>
        );
      })}
    </ul>
  );
}

export default TimesList;
