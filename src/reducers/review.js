import * as actions from '../actions/actiontypes';

const initialState = {
  heats: [],
  selectedHeatResults: {athletes: [], times: []}
};

const Review = (state = initialState, action) => {
  switch (action.type) {
    case actions.DISPLAY_HEAT_RESULTS:
      return Object.assign({}, state, { selectedHeatResults: action.heatResults });
    case actions.ADD_HEAT_RESULTS:
      return Object.assign({}, state, { heats: [ ...state.heats, action.heatResults._id ] })
    default:
      return state;
  }
}

export default Review;
