import React, { Component } from 'react'

export class Reloj extends Component {


    

    constructor() {
        super();
        console.log("constructor")
        // Inicio un estado. Es SIEMPRE un objeto
        // El constructor es el único sitio donde
        // vamos a poner this.state= en los demás sitios
        // vamos a usar setState
        this.state = {
            hora: "---",
            todos: []
        }
    }


    /**
     * El componentDidMount es un gran sitio para 
     * ir a por datos o poner contadores (setTimeout, setInterval)
     * 
     */
     componentDidMount() {
         console.log("component did mount");
         setInterval(
             ()=> {
                 this.setState({
                     hora: new Date().toLocaleTimeString()
                    })
             }
             , 1000);

             fetch('https://jsonplaceholder.typicode.com/todos/')
             .then(response => response.json())
             .then(json => this.setState({
                 todos: json}
                 ))
     }


    render() {
        console.log("rendering"); 

        return (
            <div>
            <div className="reloj">
                {this.state.hora}
            </div>
            {this.state.todos.length === 0? <h1>cargando...</h1>: null}
            <ul>
                {this.state.todos.map(e => <li>{e.title}</li>)}
            </ul>
            </div>
        )
    }
}

export default Reloj
