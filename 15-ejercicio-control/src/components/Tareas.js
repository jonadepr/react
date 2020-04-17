import React, { Component } from 'react'
import './Tareas.css'
import ListaUsuarios from './ListaUsuarios'
import ListaTareas from './ListaTareas'

export class Tareas extends Component {

    constructor(props){
        super(props);
        this.state = {
            usuario: null
        }
    }

    changeUser = ( userId ) => {
        console.log(`Cambiando el usuario a ${userId}`);
        this.setState(
            {
                usuario:userId
            }
        )
    }


    render() {

        return (
            <div className="tareas">
                <ListaTareas usuario={this.state.usuario}/>
                <ListaUsuarios changeUser={this.changeUser}/>
            </div>
        )
    }
}

export default Tareas
