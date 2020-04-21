import React, { Component } from 'react'
import ListaUsuarios from './ListaUsuarios'
import ListaTareas from './ListaTareas'
import './Tareas.css'

export class Tareas extends Component {

    constructor(props){
        super(props);
        this.state={
            usuId : 1
        }
    }

    modificarUsuario = (id) => {
/*         this.state = {
            usuId : id
        };
         console.log("USU ACTUAL TAREAS", this.state.usuId); */
         this.setState({
            usuId : id
          });
        //console.log("USU ACTUAL 2 ", this.state.usuId); 
    } 

    render() {
        //console.log("SE CARGA: ",this.state.usuId);
        return (
            <div className="tareas">
                <ListaTareas usuario={this.state.usuId}/>
                <ListaUsuarios
                modificar={this.modificarUsuario}        
                ></ListaUsuarios>
            </div>
        )

    }
}

export default Tareas
