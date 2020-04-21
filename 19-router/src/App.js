import React from 'react';

import { About, Home, Content, Item, Hola } from './componentes/Componentes'

import {
  HashRouter as Router,
  Link,
  Route
} from 'react-router-dom'

// URLS de la página content
// http://localhost:3000/

// BrowserRouter
// http://localhost:3000/content

// HashRouter
// http://localhost:3000/#/content




function App() {
  return (
    <div className="App">
      <Router>

        <ul>
          <li><Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/item/1">Item 1</Link>
          </li>
          <li>
            <Link to="/item/2">Item 2</Link>
          </li>
          <li>
            <Link to="/item/3">Item 3</Link>
          </li>

          <li>
            <Link to="/hola/Laura">Laura</Link>
          </li>
          <li>
            <Link to="/hola/Marcos">Marcos</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/content" component={Content}></Route>
        <Route exact path="/item/:id" component={Item}></Route>
        <Route exact path="/hola/:nombre" component={Hola}></Route>
      </Router>
    </div>
  );
}

export default App;
