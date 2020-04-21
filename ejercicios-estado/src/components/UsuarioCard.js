import React, { Component } from 'react'
import faker from 'faker'

export class UsuarioCard extends Component {

    modificaUsuario = id => {
        const {modificar} = this.props;
        modificar(id);
        //console.log("UsuarioCard "+id);
        
    }





    render() {
        return (
            <div className="contenedor">
                <div className="ui link cards">
                    <div className="ui card" onClick={() => this.modificaUsuario(this.props.users.id)}>
                        <div className="image">
                            <img src={faker.image.avatar()} alt=""></img>
                        </div>
                        <div className="content">
                            <a className="header">{this.props.users.name}</a>
                            <div className="meta">
                                <span className="email">{this.props.users.email}</span>
                            </div>
                            <div className="description">
                                {this.props.users.address.city}
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="phone icon"></i>
                                {this.props.users.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UsuarioCard
