import * as actions from '../actions';
import { db } from '../App';

const fetchData = (url) => {
  return fetch(url, { accept: 'application/json'})
}

export const fetchAthletes = () => {
  return (dispatch) => {
    return fetchData('./api')
      .then(response => response.json())
      .then(data => dispatch(actions.updateAthletes(data.athletes)))
      .catch(err => console.error(err))
  }
}

export const saveResults = (results) => {
  return (dispatch) => {
    const savedResults = Object.assign({ _id: new Date().toISOString() }, results);
    db.put(savedResults, (err, result) => {
      if(err) console.log("Error:", err);
      dispatch(actions.addHeatResults(savedResults));
      dispatch(actions.resetTimes());
    })
  }
}

export const fetchSelectedHeat = (id) => {
  return (dispatch) => {
    return db.get(id).then(results => dispatch(actions.displayHeatResults(results))).catch(err => console.error(err))
  }
}