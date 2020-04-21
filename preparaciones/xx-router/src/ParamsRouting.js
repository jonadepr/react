import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

// Los parámetros son marcadores de posición en la URL que comienzan
// con dos puntos, como el parámetro `: id` definido en
// la ruta en este ejemplo. Una convención similar
// se usa para hacer coincidir segmentos dinámicos en otros
// marcos web populares como Rails y Express.

export default function ParamsRouting() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/1">Objeto 1</Link>
                    </li>
                    <li>
                        <Link to="/2">Objeto 2</Link>
                    </li>
                    <li>
                        <Link to="/3">Objeto 3</Link>
                    </li>
                    <li>
                        <Link to="/4">Objeto 4</Link>
                    </li>
                </ul>
                <Route path="/:id" component={Child}>
                </Route>

            </div>
        </Router>
    );
}

class Child extends React.Component {
    render() {
        console.log(this.props.match)
        const { id } = this.props.match.params;
        return (
            <div>
                <h3>ID: {id}</h3>
            </div>
        )
    }

}
