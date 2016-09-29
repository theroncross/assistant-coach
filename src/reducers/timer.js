const initialState = {
  results: [],
  athletes: [{
    name: "John",
    fastestTime: 74
  }, {
    name: "Sarah",
    fastestTime: 84
  }, {
    name: "Jennifer",
    fastestTime: 64
  }, {
    name: "Sam",
    fastestTime: 54
  }]
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return Object.assign({}, state, { results: [ ...state.results, action.result ]});
    default:
      return state;
  }
}

export default Timer;
