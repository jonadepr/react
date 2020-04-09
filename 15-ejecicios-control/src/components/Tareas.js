import React, { Component } from 'react'
import './Tareas.css'
import ListaUsuarios from './ListaUsuarios'
import ListaTareas from './ListaTareas'

export class Tareas extends Component {


    render() {

        return (
            <div className="tareas">
                <ListaTareas ></ListaTareas>
                <ListaUsuarios></ListaUsuarios>
            </div>
        )
    }
}

export default Tareas
