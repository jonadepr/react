import React, { Component } from 'react'

export class Header extends Component {


    render() {
        return (
            <div>
                <h1 className="ui header">{this.props.texto}</h1>
            </div>
        )
    }
}

export default Header