const initialState = { results: [] }

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      console.log(state);
      return Object.assign({}, ...state, { results: [ ...state.results, action.result ]});
    default:
      return state;
  }
}

export default Timer;