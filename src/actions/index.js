import * as actions from './actiontypes';

export const addTime = (time) => {
  return {
    type: actions.ADD_TIME,
    time
  };
};

export const updateAthletes = (athletes) => {
  return {
    type: actions.UPDATE_ATHLETES,
    athletes
  };
}

export const moveUpOne = (i) => {
  return {
    type: actions.MOVE_UP_ONE,
    i
  }
}

export const resetTimes = (heatResults) => {
  return {
    type: actions.RESET_TIMES,
    heatResults
  }
}

export const addHeatResults = (heatResults) => {
  return {
    type: actions.ADD_HEAT_RESULTS,
    heatResults
  }
}

export const displayHeatResults = (heatResults) => {
  return {
    type: actions.DISPLAY_HEAT_RESULTS,
    heatResults
  }
}
