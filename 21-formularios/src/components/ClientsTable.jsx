import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {BASE_API_URL} from '../config/config'

const eliminarCliente = (id) =>{
    //console.log(id)
    axios.delete(`${BASE_API_URL}/clientes/${id}/`).then(
        res => {console.log(res)
        window.location.reload(true)}
    ).catch(
        console.log
    )
    
}


const ClientsTable = (props) => {
    return (
        <div>
            <div>
                <table className="ui striped table unstackable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.items.map(
                                e => <tr key={`project${e.id}`}>
                                    <td>{e.id}</td>
                                    <td>{e.nombre}</td>
                                    <td>
                                        <div>
                                            <Link to={"/clientes/" + e.id + "/"} className="ui basic green button">
                                                <i className="icon eye"></i>
                                        Ver
                                        </Link>

                                            <button onClick={()=>eliminarCliente(e.id)} className="ui red button">Borrar</button>

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

export default ClientsTable

