import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {BASE_API_URL} from '../config/config'

const eliminarProyecto = (id) =>{
    //console.log(id)
    axios.delete(`${BASE_API_URL}/projects/${id}/`).then(
        res => {console.log(res)
        window.location.reload(true)}
    ).catch(
        console.log
    )
    
}


const ProjectsTable = (props) => {
    return (
        <div>
            <div>
                <table className="ui striped table unstackable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Código de proyecto</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.items.map(
                                e => <tr key={`project${e.id}`}>
                                    <td>{e.id}</td>
                                    <td>{e.code}</td>
                                    <td>{e.description}</td>
                                    <td>{e.client}</td>
                                    <td>
                                        <div>
                                            <Link to={"/projects/" + e.id + "/"} className="ui basic green button">
                                                <i className="icon eye"></i>
                                        Ver
                                        </Link>

                                            <button onClick={()=>eliminarProyecto(e.id)} className="ui red button">Borrar</button>

                                        </div>

                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsTable

