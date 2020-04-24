import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {


    render() {
        return (
            <div className="header">
                <img className="imagen" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"></img>
                <h3 className="ui header">{this.props.texto} </h3>
            </div>
        )
    }
}

export default Header