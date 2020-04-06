import React from 'react'
import Fecha from './Fecha'
import Usuario from './Usuario'
import './Header.css'


const Header = (props) => {

    const user = props.user;

    return (
        <div className="header">
            <Usuario user={user}></Usuario>
            <Fecha></Fecha>
        </div>
    )
}

export default Header
