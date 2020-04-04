import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


// ReactDOM es el que se encarga de pintar cosas en pantalla
// Admite dos parámetros, el componente que vamos a pintar
// y el elemento del dom donde lo vamos a pintar
ReactDOM.render(
    //componente
    <App></App>, // también se podría poner autocerrado <App/>
    document.querySelector("#root")
    // document.getElementById("root")    
)

