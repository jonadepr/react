import React from 'react';
import Fecha from './Fecha'
import Usuario from './Usuario'
import './Header.css'

const Header = (props) => {

    console.log(props);

    /**
     * Mi objeto de propiedades es de la forma:
     * {titulo: "Welcome properties"}
     */

    // inserto un sufijo
    const miusuario = props.user;

    return (
        <div className="header">
            <Usuario user={miusuario}></Usuario>
            <Fecha></Fecha>
            
        </div>
    )
}

export default Header;