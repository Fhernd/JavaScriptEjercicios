// Ejercicio 508: Poblar un elemento select de forma dinámica con datos de un servidor.

const http = require('http');
const url = require('url');

let servidor = http.createServer().listen(4900);

servidor.on('request', (req, res) => {
    const parametros = url.parse(req.url, true).query;
    const opcion = parametros['opcion'];

    let lenguajes = ['JavaScript', 'Java', 'C++', 'PHP', 'Python', 'C'];
    let librerias = ['jQuery', 'Underscore.js', 'Lodash'];
    let frameworks = ['Vue.js', 'Angular', 'React', 'Ionic', 'NativeScript'];
    let respuesta = null;

    switch(opcion){
        case 'lenguajes':
            respuesta = lenguajes;
            break;
        case 'librerias':
            respuesta = librerias;
            break;
        default:
            respuesta = frameworks;
    }

    res.writeHeader(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify(respuesta));
});
