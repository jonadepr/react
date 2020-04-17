import React, { Component } from 'react'
import Logo from './Logo'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header">
            <Logo></Logo>     
            </div>
        )
    }
}

export default Header
