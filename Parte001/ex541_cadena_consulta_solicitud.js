// Ejercicio 541: Obtener los datos de la cadena de consulta (query string) con el módulo url.

let http = require('http');
let url = require('url');

http.createServer(function(req, res) {
    let query = url.parse(req.url, true).query;

    res.writeHead(200, {'Content-Type': 'text/plain'});

    let lenguaje = query.lenguaje ? query.lenguaje : 'JavaScript';

    res.end(`El lenguaje de programación seleccionado es ${lenguaje}`);
}).listen(4900);

console.log('El servidor Node.js se está ejecutando en el puerto 4900.');
