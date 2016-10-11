const initialState = {
  results: [],
  athletes: []
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return Object.assign({}, state, { results: [ ...state.results, action.result ]});
    case 'UPDATE_ATHLETES':
      return Object.assign({}, state, { athletes: action.athletes });
    case 'MOVE_UP_LIST':
      return Object.assign({}, state, { athletes: swapPositions(action.index, state.athletes) });
    default:
      return state;
  }
}

export default Timer;

function swapPositions (index, array) {
  if(index === 0) return array;
  const tmpArr = [...array];
  const tmpVal = tmpArr[index];
  tmpArr[index] = tmpArr[index -1];
  tmpArr[index -1] = tmpVal;
  return tmpArr;
}