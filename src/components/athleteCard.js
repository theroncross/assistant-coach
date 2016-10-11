import React from 'react';
import { connect } from 'react-redux';
import { moveUpList } from '../actions';

const AthleteCard = (props) => {
  return (
    <td>
      <h2 onClick={props.moveUpList} >
        {props.athlete.name}
      </h2>
    </td>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { moveUpList: dispatch(moveUpList(ownProps.place)) }
}

export default connect(null, mapDispatchToProps)(AthleteCard);
