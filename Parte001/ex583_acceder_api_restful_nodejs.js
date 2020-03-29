// Ejercicio 583: Acceder a contenido JSON a través de una API RESTful usando Node.js.

let Client = require('node-rest-client').Client;

let client = new Client();

client.get('https://randomuser.me/api/?results=5', function(datos, respuesta){
    console.log(datos);

    console.log();

    console.log(JSON.stringify(datos));
});
