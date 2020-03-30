// Ejercicio 589: Usar el módulo Node.js restify como cliente de una API REST.

let restify = require('restify-clients');

let cliente = restify.createStringClient({url: 'http://localhost:4949'})

cliente.post('/api/datos/crear', {nombre: 'Edward Ortiz'}, function(err, req, res, datos){
    console.log(datos);
});
