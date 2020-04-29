import React, { Component } from 'react'
import { BRAND } from '../config/config'

import {

    Link,

} from 'react-router-dom'


export class Header extends Component {


    render() {
        return (
            <div>
                <h3>{BRAND}</h3>
                
                    <div>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div>
                        <Link to="/clientes">Clientes</Link>
                    </div>
                <h1 className="ui header">{this.props.texto}</h1>
            </div>
        )
    }
}

export default Header