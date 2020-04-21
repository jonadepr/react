import React from 'react';
import Header from './Header'


const App = () => {
    
    // puedo definir una variable que es lo quiero 
    // que el título muestre
    const usuario = { 
                    user: "afoone", 
                    nombre: "Juan",
                    apellido: "López",
                    edad: 27
                    };
    
    // lo que ponga entre llaves es javascript
    // 
    return (
        <div className="app">
        <Header user={usuario}></Header>
        </div> 
        
        )
}

// devolvemos el componente
export default App;