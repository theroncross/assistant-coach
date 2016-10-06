export const addResult = (result) => {
  return {
    type: 'ADD_RESULT',
    result
  };
};

export const updateAthletes = (athletes) => {
  return {
    type: 'UPDATE_ATHLETES',
    athletes
  };
}
