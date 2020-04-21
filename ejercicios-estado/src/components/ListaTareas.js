import React, { Component } from 'react'
import axios from 'axios';
import './ListaTareas.css'

class ListaTareas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            usuarios: [],
            completado: []
        }
    }

    componentDidMount() {
        //console.log("A MOSTRAR :",this.props.usuario);
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
                        usuarios: res[1].data,
                        completado: res[0].data.map(e=>e.completed)
                    }
                )
            }
        )
    }

    _onDoubleClicki(item){

        const nuevo = this.state.completado;
        nuevo[item.id-1] = this.state.completado[item.id-1];

        nuevo[item.id-1] = nuevo[item.id-1]?false:true;
        this.setState({
            completado: nuevo
        });

    }





    _getNombreUsuario(id) {
        const usuariosId = this.state.usuarios.filter(
            e => e.id === id
        );
     
        return usuariosId[0] ? usuariosId[0].name: id
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
                        { //Aquí filtro por id de usuario...
                            this.state.todos.filter(
                                (e) => e.userId === this.props.usuario).map(
                                item => <tr key={item.id} onDoubleClick={()=>this._onDoubleClicki(item)}>
                                    <td data-label="Usuario">{this._getNombreUsuario(item.userId)}</td>
                                    <td data-label="Titulo">{item.title}</td>
                                    <td data-label="Completado">
                                    {this.state.completado[item.id-1] ? <i className="green check icon" ></i> :
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

export default ListaTareas
