import React, { Component } from 'react';
import PouchDB from 'pouchdb';
import Timer from './components/timer';
import './App.css';


export const db = new PouchDB('results');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;
