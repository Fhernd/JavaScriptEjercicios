// Ejercicio 608: Crear un servidor para establecer una comunicación bidireccional con WebSockets.

let Server = require('ws').Server;

let servidor = new Server({port: 5151});

servidor.on('connection', function(conexion){
    
    let datos = {contador: 1, contenido: ''};

    conexion.send(JSON.stringify(datos));

    conexion.on('message', function(mensaje) {
        let objeto = JSON.parse(mensaje);

        objeto.contador = parseInt(objeto.contador) + 1;

        conexion.send(JSON.stringify(objeto));
    });
});
