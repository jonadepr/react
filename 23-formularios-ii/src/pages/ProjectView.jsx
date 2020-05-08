import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_API_URL } from '../config/config'
import { Link } from 'react-router-dom'
import Imputaciones from '../components/Imputaciones'

export class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            showComponent: false,
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    componentDidMount() {
        console.log(this.props.match)
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
                
                    <button onClick={this._onButtonClick} className="ui button">Nueva imputación</button>
                    {this.state.showComponent ?
                        <Imputaciones id={this.props.match.params.id} /> :
                        null
                    }
            </div>
        )
    }
}

export default ProjectView
