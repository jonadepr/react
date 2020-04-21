import React, { Component } from 'react';
import axios from 'axios';
import './TablaPosts.css';

export class TablaPosts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {
                this.setState(
                    {
                        posts: res.data,
                    }
                )
            }
        )
    }

    

    render() {
        return (
            <div className="tablaposts">
                 <table className="tabla"> 
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr></thead>
                    <tbody> 
                        {
                            this.state.posts.filter(
                                (e) => {
                                    return e.title.toLowerCase().includes(this.props.titulo.toLowerCase()) || e.body.toLowerCase().includes(this.props.titulo.toLowerCase());
                                }

                            ).map(
                                item => <tr key={item.id} >
                                    <td data-label="userId">{item.userId}</td>
                                    <td data-label="id">{item.id}</td>
                                    <td data-label="title">{item.title}</td>
                                    <td data-label="body">{item.body}</td>
                                </tr>

                            )
                        }
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default TablaPosts
