import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ProjectCard extends Component {
    render() {
        return (
            <div>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {this.props.card.id}
                            </div>
                            <div className="meta">
                                Código: {this.props.card.code}
                            </div>
                            <div className="description">
                                Descripción: {this.props.card.description}
                            </div>
                            <div className="description">
                                Cliente: {this.props.card.client}
                            </div>
                        </div>
                        <div className="extra content">
                            
                            <Link to="/projects/" className="ui button">
                        <div className="ui basic green button">Volver</div>
                        
                </Link>
                                
                          
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjectCard
