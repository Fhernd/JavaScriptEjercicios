// Ejercicio 542: Generar una respuesta en formato JSON desde un servidor Node.js.

require('http').createServer(function(req, res) {
    let personas = {
        'personas': [
            {
                'id': 1001,
                'nombre': 'Edward Ortiz',
                'email': 'edward@mail.co'
            },
            {
                'id': 1002,
                'nombre': 'Daniela Ortiz',
                'email': 'daniela@mail.co'
            },
            {
                'id': 1003,
                'nombre': 'Germán Ortiz',
                'email': 'german@mail.co'
            },
        ]
    };

    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    res.end(JSON.stringify(personas));
}).listen(4900);

console.log('El servidor se está ejecutando en el puerto 4900.');
