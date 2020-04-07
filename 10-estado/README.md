 Que ocurre con el estado. 
  1a regla: fuera del constructor NUNCA hagamos
           this.state = {...}
  2a regla: para actualizar el estado fuera del
   constructor vamos a usar this.setState({})
  3a regla: Si el estado tiene varias propiedades 
    pero en setState sólo le pasamos una, no actualiza
    las demás
  
          this.state = {
               nombre: "juana",
               apellido: "Trastámara"
           }
  
           this.setState({
               nombre: "Felipe"
               })
  
            this state será:
              {
               nombre: "Felipe",
               apellido: "Trastámara"
           }
  4a regla: Cada vez que hago setState el componente 
     se vuelve a pintar.