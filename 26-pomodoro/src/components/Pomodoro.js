import React, { Component } from 'react'
import Header from './Header'
import Mensaje from './Mensaje';

export class Pomodoro extends Component {



    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500,
            start: false
        }
    }

    start = () => {
        if (this.state.start === false) {
            this.interval = setInterval(
                () => this.setState
                    ({
                        tiempo: this.state.tiempo - 1,
                        start: true
                    }),
                1000
            )
        }
    }


    reset = () => {
        this.setState({
            tiempo: 1500
        })
        setTimeout(() => clearInterval(this.interval), 1500000);
    }


    stop = () => {
        setTimeout(() => clearInterval(this.interval), 0);
        this.setState({
            start: false
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                Pomodoro {this.state.tiempo}
                <br></br>Tiempo en minutos y segundos: {" "}
                {Math.trunc(this.state.tiempo / 60)}{":"}{this.state.tiempo % 60}
                <br></br>
                <button onClick={this.start} className="green ui button">
                    Start
                </button>
                <button onClick={this.reset} className="grey ui button">
                    Reset
                </button>
                <button onClick={this.stop} className="red ui button">
                    Stop
                </button>
                { this.state.tiempo<0?
                    <Mensaje></Mensaje> : null
                }
            </div>
        )
    }
}

export default Pomodoro