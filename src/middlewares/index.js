import { updateAthletes } from '../actions';

const fetchData = (url) => {
  return fetch(url, { accept: 'application/json'})
}

export const fetchAthletes = () => {
  return (dispatch) => {
    return fetchData('./api')
      .then(response => response.json())
      .then(data => dispatch(updateAthletes(data.athletes)))
      .catch(console.log('oh noes...'));
  }
}