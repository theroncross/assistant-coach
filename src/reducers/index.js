import { combineReducers } from 'redux';
import timing from './timing';
import review from './review';

const app = combineReducers({
  timing,
  review
});

export default app;
