import { updateAthletes, saveAndReset } from '../actions';
import { db } from '../App';

const fetchData = (url) => {
  return fetch(url, { accept: 'application/json'})
}

export const fetchAthletes = () => {
  return (dispatch) => {
    return fetchData('./api')
      .then(response => response.json())
      .then(data => dispatch(updateAthletes(data.athletes)))
  }
}

export const saveResults = (results) => {
  return (dispatch) => {
    const entry = Object.assign({ _id: new Date().toISOString() }, results);
    db.put(entry, (err, result) => {
      if(err) console.log("Error:", err);
      dispatch(saveAndReset(entry));
    })
  }
}