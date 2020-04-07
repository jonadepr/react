import React from 'react'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import './Comentario.css'

const Comentario = (props) => {

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(es);

// Create relative date/time formatter.
const timeAgo = new TimeAgo('es-ES');
//persona.fecha.toLocaleDateString()
    const persona = props.p;
    return (
            <div className="comment">
                <a className="avatar">
                    <img src={persona.avatar} alt={persona.nombre}></img>
                </a>
                    <div className="content">
                        <a className="author">{persona.nombre} {persona.apellido}</a>
                        <div className="metadata">
                            <span className="date">{timeAgo.format(persona.fecha - 24 * 60 * 60 * 1000)}</span>
                        </div>
                        <div className="text">
                        {persona.comentario}
                        </div>
                    </div>
            </div>

    ) 
}

export default Comentario