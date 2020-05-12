import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_API_URL } from '../config/config'
import { Link } from 'react-router-dom'
import Imputaciones from '../components/Imputaciones'
import ListaImputaciones from '../components/ListaImputaciones'

export class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            showImputaciones: false,
            showListaImputaciones: true
        }
    }

    _onMostrarImputacion=()=> {
        this.setState({
            showImputaciones: !this.state.showImputaciones,
            showListaImputaciones: false
        });
    }

    _onMostrarLista=()=> {
        this.setState({
            showListaImputaciones: !this.state.showListaImputaciones,
            showImputaciones: false,
        });
    }

    componentDidMount() {
        //console.log(this.props.match)
        axios.get(`${BASE_API_URL}/projects/${this.props.match.params.id}/`)
            .then(res =>
                this.setState({
                    project: res.data
                })
            )
    }

    render() {
        return (
            <div className="project-view">
                <Header>
                    <i aria-hidden="true" className="list icon"></i>
                    Proyecto
                </Header>
                <ProjectCard item={this.state.project}></ProjectCard>
                <Link to="/projects" className="ui button">Volver</Link>

                <button onClick={this._onMostrarImputacion} className="ui button">
                    Nueva imputación
                        </button>
                {this.state.showImputaciones ?
                    <Imputaciones onClick={this._onButtonClick} id={this.props.match.params.id} /> :
                    null
                }

                <button onClick={this._onMostrarLista} className="ui button">
                    Lista imputaciones
                        </button>
                {this.state.showListaImputaciones ?
                    <ListaImputaciones onClick={this._onButtonClick2} id={this.props.match.params.id} /> :
                    null
                }

            </div>
        )
    }
}

export default ProjectView
