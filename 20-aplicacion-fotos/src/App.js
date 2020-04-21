import React from 'react';
import TablaFiltrada from './components/TablaFiltrada'
import Fotos from './components/Fotos'

import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <TablaFiltrada></TablaFiltrada> */}
      <Fotos></Fotos>
    </div>
  );
}

export default App;
