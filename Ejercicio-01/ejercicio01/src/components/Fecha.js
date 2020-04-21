import React from 'react'
import './Fecha.css'
const Fecha = () => {

    /**
     * Mi objeto de propiedades es de la forma:
     * {titulo: "Welcome properties"}
     */

    // inserto un sufijo
    const fechaactual = `${new Date().toLocaleDateString()}`;

    return (
        <div className="fecha">
            {fechaactual}
        </div>
    )
}

export default Fecha;