import React, { Component } from 'react'
import ProjectForm from '../components/ProjectForm'
import Header from '../components/Header'

export class ProjectCreate extends Component {
    render() {
        return (
            <div className="project-create">
                <Header texto={"Crear Proyecto"}/>
                <ProjectForm/>
            </div>
        )
    }
}

export default ProjectCreate
