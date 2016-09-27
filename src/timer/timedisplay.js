import React from 'react';

const TimeDisplay = (props) => {
  const minutes = () => Math.floor(props.time / 600);
  const seconds = () => Math.floor(props.time / 10) % 60;
  const tenths = () => props.time % 10;
  const padded = (num) => ("0" + num).length === 2 ? "0" + num : num;
  return <h1>{minutes()}:{padded(seconds())}.{tenths()}</h1>;
}

export default TimeDisplay;
