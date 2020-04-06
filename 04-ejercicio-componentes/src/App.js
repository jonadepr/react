import React from 'react';
import Header from './Header';

const usuario = {
  usuario: "jcebolla",
  nombre: "Juan",
  apellido:"Cebolla",
  edad: 67
}

const App = ()=> {
  return (
    <div className="app">
      <Header user={usuario}></Header>
    </div>
  );
}

export default App;
