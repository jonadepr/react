import React from 'react';
import ChukNorrisJokes from './components/ChuckNorrisJokes'
import Header from './components/Header'
//import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Header texto={"Lista de categorías de chistes de Chuck Norris"}/>
      <ChukNorrisJokes/>
    </div>
  );
}

export default App;
