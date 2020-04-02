// Ejercicio 601: Establecer los métodos/verbos HTTP permitidos en un servidor creado con Node.js.

const http = require('http');

let servidor = http.createServer(function(req, res) {

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin',  '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');

    res.writeHead(200);

    res.end('Respuesta del servidor.');
});

servidor.listen(4949);
