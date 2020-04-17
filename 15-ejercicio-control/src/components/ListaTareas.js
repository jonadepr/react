import React, { Component } from 'react'
import axios from 'axios';

class ListaComentarios extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            usuarios: []
        }
    }

    componentDidMount() {

        console.log("lista tareas did mount");

        Promise.all(
            [
                axios.get("https://jsonplaceholder.typicode.com/todos"),
                axios.get("https://jsonplaceholder.typicode.com/users")
            ]
        ).then(
            res => {
                this.setState(
                    {
                        todos: res[0].data,
                        usuarios: res[1].data
                    }
                )
            }
        )
    }

    _getNombreUsuario(id) {
        const usuariosId = this.state.usuarios.filter(
            e => e.id === id
        );
        return usuariosId[0] ? usuariosId[0].name : id
    }

    onTrDblClicHandler = itemId => {
        // Para marcar completado tengo los todos
        const i = this.state.todos.findIndex(
            e => e.id === itemId
        )

        const newTodos = this.state.todos;
        newTodos[i].completed =
            this.state.todos[i].completed ? false : true;

        this.setState({
            todos: newTodos
        }
        )

    }

    render() {
        return (
            <div className="lista-comentarios">
                {
                    this.state.todos.length < 1 ? <h3>Cargando...</h3> : null
                }
                <table className="ui celled table unstackable">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Titulo</th>
                            <th>Completado</th>
                            <th>Id</th>
                        </tr></thead>
                    <tbody>
                        {
                            this.state.todos
                                .filter(
                                    e => (!this.props.usuario || e.userId === this.props.usuario)
                                )
                                .map(
                                    item =>
                                        <tr key={item.id} onDoubleClick={() => this.onTrDblClicHandler(item.id)}>
                                            <td data-label="Usuario">{this._getNombreUsuario(item.userId)}</td>
                                            <td data-label="Titulo">{item.title}</td>
                                            <td data-label="Completado">
                                                {item.completed ?
                                                    <i className="green check icon"></i> :
                                                    <i className="red close icon"></i>}
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
