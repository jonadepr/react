import React, { Component } from 'react'
import axios from 'axios'
import './TablaPosts.css'

export class TablaPosts extends Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                res => {
                    this.setState({
                        posts: res.data
                    })
                }
            )
    }


    render() {

      //  console.log("filtro", this.props.filtro);

        return (
            <div className="tabla-posts">
                <table className="ui red celled striped table unstackable">
                    <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Text</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.posts

                            .filter(
                                // tiene que devolver true
                                // si queremos que el array 
                                // resultante contenga al elemento
                                // false si no queremos que lo contenga
                                e => e.title.includes(this.props.filtro ? this.props.filtro : "")
                                || e.body.includes(this.props.filtro ? this.props.filtro : "")
                            )

                            .map(
                                e =>
                                    <tr key={e.id}>
                                        <td>{e.userId}</td>
                                        <td>{e.id}</td>
                                        <td>{e.title}</td>
                                        <td>{e.body}</td>
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
