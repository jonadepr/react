import React from 'react';
import faker from 'faker'

class Card extends React.Component {

    imagen = "vacia";

    constructor(props) {
        super(props);
        console.log("elemento construido");
        console.log("imagen", this.imagen);
        this.imagen = faker.image.avatar()
    }

    // Render es el que devuelve el código JSX
    // que pinta en pantalla una tarjeta
    render() {
        console.log("elemento pintado")
        console.log("props",this.props);

        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.imagen}></img>
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        Kristy is an art director living in New York.
              </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                {this.props.namigos} amigos
              </a>
                </div>
            </div>
        )
    }
}



export default Card;


