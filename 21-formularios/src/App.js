import React from 'react';
import ProjectList from './pages/ProjectList'
import ProjectCreate from './pages/ProjectCreate'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectView from './pages/ProjectView';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="ui container">
        <Route exact path="/" component={ProjectList}/>
        <Route exact path="/projects" component={ProjectList}/>
        <Route path="/projects/new/" component={ProjectCreate}/>
        <Route path="/projects/:id/" component={ProjectView}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
