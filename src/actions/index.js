export const addResult = (result) => {
  return {
    type: 'ADD_RESULT',
    result
  };
};

export const fetchAthletes = (url) => {
  return {
    type: 'FETCH_ATHLETES',
    url
  };
}
