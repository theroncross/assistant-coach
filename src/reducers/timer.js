const initialState = {
  results: [],
  athletes: []
};

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return Object.assign({}, state, { results: [ ...state.results, action.result ]});
    case 'FETCH_ATHLETES':
      return Object.assign({}, state, { athletes: fetch(action.url, { accept: 'application/json'})
        .then(response => response.json())
        .then(data => data.athletes)});
    default:
      return state;
  }
}

export default Timer;
