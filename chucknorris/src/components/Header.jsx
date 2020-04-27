import React, { Component } from 'react'
import './Header.css'
import {
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router-dom'
import ChukNorrisJokes from './ChuckNorrisJokes'
import RecuperarChistes from './RecuperarChistes'

export class Header extends Component {


    render() {
        return (
            <div className="header">
                <img className="imagen" alt={this.props.texto} src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"></img>
                <h3 className="ui header">{this.props.texto}</h3>
                <Router>
                    <div>
                    <Link to="/">Home</Link>
                    </div>
                    <div>
                    <Link to="/recuperar">Recuperar</Link>
                    </div>
                    <Route exact path="/" component={ChukNorrisJokes}></Route>
                    <Route exact path="/recuperar" component={RecuperarChistes}></Route>
                </Router>
            </div>

        )
    }
}

export default Header