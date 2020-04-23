import React from 'react'
import { Link } from 'react-router-dom'

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
                                            <Link to={"/projects/" + e.id +"/"} className="ui basic button">
                                                <i className="icon eye"></i>
                                        Ver
                                        </Link>
                                            <button class="ui button">Borrar</button>

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

