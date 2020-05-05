import React, { Component } from 'react'
import Header from './Header'
import './Pomodoro.css'
import Mensaje from './Mensaje';

export class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500,
            running: false,
            mensaje: null
        }
        this.interval = null;
    }

    // componentDidMount() {
    // }

    onStart = () => {
        this.interval = setInterval(
            () => {
                if (this.state.tiempo === 0) {
                    clearInterval(this.interval)
                    this.setState(
                        {
                            running: false,
                            mensaje: "El tiempo ha terminado"
                        }
                    )
                } else {
                    this.setState(
                        {
                            tiempo: this.state.tiempo - 1,
                            running: true
                        }
                    )
                }
            },
            10
        )
    }

    onStop = () => {
        clearInterval(this.interval)
        this.setState(
            {
                running: false
            }
        )

    }

    onReset = () => {
        clearInterval(this.interval)
        this.setState(
            {
                tiempo: 1500,
                running: false,
                mensaje: null
            }
        )
    }


    onShort = () => {
        clearInterval(this.interval)
        this.setState(
            {
                tiempo: 300,
                running: false,
                mensaje: null
            }
        )
    }


    onLarge = () => {
        clearInterval(this.interval)
        this.setState(
            {
                tiempo: 600,
                running: false,
                mensaje: null
            }
        )        
    }

    render() {
        return (
            <div className="pomodoro" >
                <Header></Header>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {Math.floor(this.state.tiempo / 60)}:
        {this.state.tiempo % 60 < 10 ? "0" : null}{this.state.tiempo % 60}
                            </div>
                            {this.state.mensaje ?
                                <Mensaje mensaje={this.state.mensaje}></Mensaje>
                                : null}
                        </div>
                        <div className="ui progress">
                            <div className="bar"
                                style={{ width: (Math.trunc(this.state.tiempo / 60 / 25 * 100)) + "%" }}>
                                <div className="progress" ></div>
                            </div>
                            <div className="label">{(Math.trunc(this.state.tiempo / 60 / 25 * 100)) + "%"}</div>
                        </div>
                        <div className="extra content">
                            <div className="ui five buttons">
                                <div className={`ui basic green button ${this.state.running ? "disabled" : ""}`}
                                    onClick={this.onStart}>
                                    Start</div>
                                <div className={`ui basic red button ${this.state.running ? "" : "disabled"}`} onClick={this.onStop}>
                                    Stop</div>
                                <div className="ui basic blue button" onClick={this.onReset}>
                                    Reset</div>
                                <div className="ui basic purple button" onClick={this.onShort}>
                                    Short</div>
                                <div className="ui basic black button" onClick={this.onLarge}>
                                    Large</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pomodoro