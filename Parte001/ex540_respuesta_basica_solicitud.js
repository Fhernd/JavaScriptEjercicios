// Ejercicio 540: Crear un servidor con Node.js para responder a una solicitud simple.

// Carga el módulo http:
let http = require('http');

// Crear un servidor:
http.createServer(function(req, res){
    // Encabezado de contenido:
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Mensaje de respuesta e indicación de fin de la comunicación:
    res.end('Respuesta desde un servidor Node.js');
}).listen(4900);

console.log('El servidor Node.js se está ejecutando en el puerto 4900.');
