// Ejercicio 588: Usar el módulo Node.js restify para construir una API REST.

let restify = require('restify');

let servidor = restify.createServer({name: 'apirest'});
servidor.use(restify.plugins.bodyParser());

servidor.get('/api/datos/:nombre', function retrieve(req, res, next){
    res.send('El dato enviado es: ' + req.params.nombre);
    next();
});

servidor.post('/api/datos/crear', function create(req, res, next) {
    console.log(req.params);

    res.send('Se ha creado el registro de forma satisfactoria: ' + req.body.nombre);

    return next();
});

servidor.listen(4949, function() {
    console.log(`${servidor.name} se está ejecutando en ${servidor.url}.`);
});
