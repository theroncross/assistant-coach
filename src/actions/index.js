export const addTime = (time) => {
  return {
    type: 'ADD_TIME',
    time
  };
};

export const updateAthletes = (athletes) => {
  return {
    type: 'UPDATE_ATHLETES',
    athletes
  };
}

export const moveUpOne = (i) => {
  return {
    type: 'MOVE_UP_ONE',
    i
  }
}

export const saveAndReset = (entry) => {
  return {
    type: 'SAVE_AND_RESET',
    entry
  }
}
