import React from 'react';
import PouchDB from 'pouchdb';
import Nav from './components/nav';
import './stylesheets/App.css';


export const db = new PouchDB('results');

const App = (props) =>  {
  return (
    <div className="App">
      <Nav />
      {props.children}
    </div>
  );
}

export default App;
