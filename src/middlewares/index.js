import { updateAthletes } from '../actions';

export const fetchAthletes = () => {
  return (dispatch) => {
    return fetchData('/api')
      .then(checkStatus)
      .then(parseJSON)
      .then(data => dispatch(updateAthletes(data.athletes)))
  }
}

function fetchData (url) {
  return fetch(url, { accept: 'application/json'})
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}