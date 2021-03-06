const initialState = {
  unsavedTimes: [],
  results: [],
  athletes: []
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TIME':
      return Object.assign({}, state, { unsavedTimes: [ ...state.unsavedTimes, action.time ]});
    case 'UPDATE_ATHLETES':
      return Object.assign({}, state, { athletes: action.athletes });
    case 'MOVE_UP_ONE':
      return Object.assign({}, state, { athletes: moveUpOne(state.athletes, action.i)});
    case 'SAVE_RESULTS':
      return Object.assign({}, state,
        {
          results: state.results.concat(saveResults(state.athletes, state.unsavedTimes)),
          unsavedTimes: []
        }
      );
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

function saveResults(athletes, times) {
  return { athletes: [ ...athletes ], times: [ ...times ] }
}
