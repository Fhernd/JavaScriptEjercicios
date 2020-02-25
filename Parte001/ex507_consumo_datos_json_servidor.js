// Ejercicio 507: Lectura de datos en formato JSON desde una solicitud a un servidor.

const http = require('http');

let servidor = http.createServer().listen(4900);
servidor.on('request', (req, res) => {
    let versionesLenguajes = {
        "lenguajes": [
            {
                "nombre": "Python",
                "version": "3.8.1"
            },
            {
                "nombre": "PHP",
                "version": "7.2.1"
            },
            {
                "nombre": "Java",
                "version": "12"
            },
            {
                "nombre": "JavaScript",
                "version": "ES6"
            }
        ]
    };

    res.writeHeader(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify(versionesLenguajes));
});
