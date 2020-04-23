import React, { Component } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import axios from 'axios'
import {BASE_API_URL} from '../config/config'

export class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            description: "",
            client: ""
        }
    }

    componentDidMount(){
        axios.get(`${BASE_API_URL}/projects/${this.props.match.params.id}/`).then(
            res =>
                this.setState({
                    code: res.data.code,
                    description: res.data.description,
                    client: res.data.client
                })
        ).catch(
            console.log
        )
    }


    render() {
        //console.log(this.state);

        if (this.props.match.params.id !== "new")
        return (
            <div>
                <Header texto={"Vista del proyecto "+this.state.code}/>
                <ProjectCard card={this.state}/>
            </div>
        )

        else return null
    }
}

export default ProjectView
