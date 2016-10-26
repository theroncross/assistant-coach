import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import App from './App';
import Setup from './containers/setup';
import Timing from './containers/timing';
import Review from './containers/review';
import reducer from './reducers';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, {}, composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/setup" component={Setup}/>
        <Route path="/timing" component={Timing}/>
        <Route path="/review" component={Review}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
