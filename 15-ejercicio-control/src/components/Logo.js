import React, { Component } from 'react'
import './Logo.css'

export class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src="/logo.png" alt="Logo"></img>
            </div>
        )
    }
}

export default Logo
