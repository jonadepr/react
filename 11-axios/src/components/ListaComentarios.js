import React, { Component } from 'react'
import axios from 'axios';

class ListaComentarios extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(
                res => this.setState({todos:res.data})
            ).catch(
                err => console.error("error en axios", err)
            );

        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => {
        //         console.log("fetch response", response)
        //         return response.json()
        //     })
        //     .then(json => console.log("fetch json", json))


        // Ejemplo de error 404

        //     axios.get("https://error404.atomseo.com/220")
        //     .then(
        //         res => console.log("axios response",res)
        //         // console.log
        //     ).catch(err => console.log("error",err))

        // fetch('https://error404.atomseo.com/220')
        //     .then(response => {
        //         console.log("fetch response", response)
        //         return response.json()
        //     })
        //     .then(json => console.log("fetch json", json))
    }

    render() {
        return (
            <div className="lista-comentarios">
                <ol>
                    {
                        this.state.todos.length < 1 ? <h3>Cargando...</h3> : null
                    }
                    {
                        this.state.todos.map(
                            e =>
                                <li>{e.title}</li>
                        )
                    }
                </ol>
            </div>
        )
    }
}

export default ListaComentarios
