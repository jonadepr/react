import React from 'react';
import Title from './Title'


const App = () => {
    
    // puedo definir una variable que es lo quiero 
    // que el título muestre
    //const titulo = "Welcome properties";
    const titulo = 1.0;
    
    //lo que ponga entre llaves es javascript
    return (
        <div className="app">
            <Title titulo={titulo}></Title>
        </div>
    )
}

// devolvemos el componente
export default App;