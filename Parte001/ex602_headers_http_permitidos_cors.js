// Ejercicio 602: Establecer encabezados HTTP permitidos con el control de acceso CORS.

const http = require('http');

let servidor = http.createServer((req, res) => {
    res.setHeader('Acces-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    res.writeHead(200);

    res.end(JSON.stringify({id: 1001, nombre: 'Edward Ortiz'}));
});

servidor.listen(4949);
