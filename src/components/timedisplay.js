import React from 'react';

const TimeDisplay = (props) => {
  let sign = '';
  let time = props.time;
  if(time < 0) {
    sign = '-';
    time *= -1;
  }
  const minutes = () => Math.floor(time / 600);
  const seconds = () => Math.floor(time / 10) % 60;
  const tenths = () => time % 10;
  const padded = (num) => ("0" + num).length === 2 ? "0" + num : num;
  return (
    <span className={props.className}>
      {sign}{minutes()}:{padded(seconds())}.{tenths()}
    </span>
  );
}

export default TimeDisplay;
