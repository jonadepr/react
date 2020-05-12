import React, { useState, useEffect } from 'react'

function Example() {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [count, setCount] = useState(0);


    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        document.title = `You clicked ${count} times`;
    });


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    )
}

export default Example
