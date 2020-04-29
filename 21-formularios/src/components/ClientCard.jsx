import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ClientCard extends Component {
    render() {
        return (
            <div>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {this.props.card.nombre}
                            </div>
                            <div className="description">
                                Nombre: {this.props.card.nombre}
                            </div>
                        </div>
                        <div className="extra content">
                            
                            <Link to="/clientes/" className="ui green button">
                        Volver
                        
                </Link>
                                
                          
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ClientCard
