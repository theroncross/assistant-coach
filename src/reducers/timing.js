import * as actions from '../actions/actiontypes';

const initialState = {
  athletes: [],
  recordedTimes: []
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TIME:
      return Object.assign({}, state, { recordedTimes: [ ...state.recordedTimes, action.time ]});
    case actions.UPDATE_ATHLETES:
      return Object.assign({}, state, { athletes: action.athletes });
    case actions.MOVE_UP_ONE:
      return Object.assign({}, state, { athletes: moveUpOne(state.athletes, action.i)});
    case actions.RESET_TIMES:
      return Object.assign({}, state, { recordedTimes: [] });
    default:
      return state;
  }
}

export default Timer;

function moveUpOne(arr, i) {
  const newArr = [ ...arr ];
  if(i < 1) return newArr;
  const temp = newArr[i];
  newArr[i] = newArr[i - 1];
  newArr[i -1] = temp;
  return newArr;
}

