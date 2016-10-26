import React from 'react';
import { connect } from 'react-redux';
import { moveUpOne } from '../actions';

const AthletesList = (props) => {
  return (
    <ul className="athletes-list">
      {props.athletes.map((athlete, i) => {
        return (
          <li key={i}>
            <span
              className="athletes-list__athlete-name"
              onClick={() => props.moveUpOne(i)}
            >
              {i + 1}. {athlete.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => ({
  moveUpOne(i) { dispatch(moveUpOne(i)) }
});

export default connect(null, mapDispatchToProps)(AthletesList);
