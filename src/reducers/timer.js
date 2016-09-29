const initialState = {
  results: [],
  athletes: [{
    name: "John",
    goal: 74
  }, {
    name: "Sarah",
    goal: 84
  }, {
    name: "Jennifer",
    goal: 64
  }, {
    name: "Sam",
    goal: 54
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
