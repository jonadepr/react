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
                res => this.setState({ todos: res.data })
            ).catch(
                err => console.error("error en axios", err)
            );

    }

    render() {
        return (
            <div className="lista-comentarios">
                {
                    this.state.todos.length < 1 ? <h3>Cargando...</h3> : null
                }
                <table className="ui celled table unstackable">
                    <thead>
                        <tr><th>Titulo</th>
                            <th>Completado</th>
                            <th>Id</th>
                        </tr></thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                item => <tr key={item.id}>
                                    <td data-label="Titulo">{item.title}</td>
                                    <td data-label="Completado">
                                        {item.completed ? <i class="purple check icon"></i>:
                                        <i class="red close icon"></i>}
                                    </td>
                                    <td data-label="Id">{item.id}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>


            </div>
        )
    }
}

export default ListaComentarios
