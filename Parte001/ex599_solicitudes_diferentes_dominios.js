// Ejercicio 599: Permitir el envío de solicitudes desde diferentes dominios (Cross-Domain).

const http = require('http');

let servidor = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    res.end('Respuesta desde la API.');
});

servidor.listen(4949);
