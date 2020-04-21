import React, { Component } from 'react'
import './Logo.css'

export class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src="logo.jpg" alt="logo"></img>
            </div>
        )
    }
}

export default Logo
