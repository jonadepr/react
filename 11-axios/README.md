# axios

Instalar axios: 
```
npm i -s axios
```

Comprobaremos que al instalar con -s se nos guarda en `package.json`:
```json
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
```




Uso para un get:
```javascript
axios.get("http....").then(res => {...})
```

En `res.data` tendremos el resultado en json. 

En `res.ok` nos devolverá si la operación ha ido bien.

Respuesta:

- *data*: aquí tenemos los resultados en json
- status: 200, es el estado http que nos ha devuelto
- statusText: "texto del estado"
- headers: cabeceras del http
- config: cómo hemos configurado el axios
- request: nuestra petición


Diferencias:

- Fetch en su primera respuesta nos devuelve ok ok, que puede ser true o false, según si la llamada ha tenido éxito o no.

Por ejemplo, llamando a un 404 nos daría una respuesta:
Response:
```json
{type: "cors", url: "https://error404.atomseo.com/220", redirected: false, status: 404, ok: false, ...}
```
ante un error de http (404, 500, 403...) fetch nos devuelve en la primera respuesta un `ok:false`

Por el contrario, axios me envía al catch las peticiones que no son válidas (404, 500...) lo que me facilita mucho el control de errores