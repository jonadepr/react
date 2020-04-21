import React from 'react'

export const Home = () => {
    return <div>Home</div>
}

export const About = () => {
    return <div>About</div>
}
export const Content = () => {
    return <div>Content</div>
}


export class Item extends React.Component {

    render() {

        console.log("match", this.props.match);
        const id = this.props.match.params.id;

        return (
            <div>Item {id}</div>
        )
    }
}

export class Hola extends React.Component {
    render() {
        const nombre = this.props.match.params.nombre;
        return (
            <div>
                Hola {nombre}
            </div>
        )
    }
}


