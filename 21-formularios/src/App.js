import React from 'react';
import ProjectList from './pages/ProjectList'
import ProjectCreate from './pages/ProjectCreate'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectView from './pages/ProjectView';
import ClientList from './pages/ClientList';
import ClientView from './pages/ClientView';
import ClientCreate from './pages/ClientCreate'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="ui container">
        <Route exact path="/" component={ProjectList}/>
        <Route exact path="/projects" component={ProjectList}/>
        <Route path="/projects/new/" component={ProjectCreate}/>
        <Route path="/projects/:id/" component={ProjectView}/>
        <Route exact path="/clientes" component={ClientList}/>
        <Route path="/clientes/:id/" component={ClientView}/>
        <Route path="/clientes/new/" component={ClientCreate}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
