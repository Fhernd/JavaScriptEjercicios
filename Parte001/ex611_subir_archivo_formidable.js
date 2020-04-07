// Ejercicio 611: Subir y comprimir archivos con el uso de módulos de Node.js.

let http = require('http');
let fs = require('fs');
let zlib = require('zlib');
let formidable = require('formidable');

let zip = zlib.createGzip();

http.createServer(function(req, res) {
    if (req.url == '/subir-archivos' && req.method.toLowerCase() === 'post'){
        let formulario = new formidable.IncomingForm();
        formulario.uploadDir = __dirname + '/archivos';

        formulario.parse(req, function(error, campos, archivos) {
            let escritura = fs.createWriteStream(__dirname + '/archivos/' + archivos.subida.name + '.gz');
        });

        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <form action="/subir-archivos" enctype="multipart/form-data" method="post">
            <input type="text" name="titulo"><br>
            <input type="file" name="subida" multiple="multiple"><br>
            <input type="submit" value="Subir archivos"> 
        </form>
    `);
}).listen(4949);
