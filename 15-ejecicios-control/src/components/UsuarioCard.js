import React, { Component } from 'react'
import faker from 'faker'

export class UsuarioCard extends Component {

    // Le hemos pasado el objeto de usuario en la propiedad "usuario"
    // {this.props.usuario

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={faker.image.avatar()}></img>
                </div>
                <div className="content">
                    <a className="header">{this.props.usuario.name}</a>
                    <div className="meta">
                        <span className="date">
                            {this.props.usuario.company.name}
                        </span>
                    </div>
                    <div className="description">
                        {this.props.usuario.company.catchPhrase}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="phone icon"></i>
                        {this.props.usuario.phone}
                    </a>
                </div>
            </div>
        )
    }
}

export default UsuarioCard
