import React from 'react';
import faker from 'faker';
import Persona from './Persona'

const personas = [];

for (let index = 0; index < 20; index++) {
  const element = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono: faker.phone.phoneNumber(),
    edad: faker.random.number(90),
    avatar: faker.image.avatar()
  };
  personas.push(element);
}

function App() {

  // solucion con foreach
 // const personasComponents = [];
  // personas.forEach( e => 
  //     personasComponents.push(<Persona p={e}></Persona>))


  console.log(personas);
  return (
    <div className="app">
      {
        personas.map(e => <Persona p={e}></Persona>)
        
     //personasComponents
               
      }
  
    </div>
  );
}

export default App;
