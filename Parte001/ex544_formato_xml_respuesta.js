// Ejercicio 544: Enviar datos en formato XML desde un servidor Node.js usando xml-writer.

let XMLWriter = require('xml-writer');

require('http').createServer(function(req, res) {
    let xml = new XMLWriter();

    xml.startDocument().startElement('personas');

    xml.startElement('persona');
    xml.writeElement('id', 1001);
    xml.writeElement('nombre', 'Edward Ortiz');
    xml.writeElement('email', 'edward@mail.co');
    xml.endElement();
    
    xml.endElement();

    res.writeHead(200, {'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*'});

    res.end(xml.toString(), 'utf8');
}).listen(4900);

console.log('El servidor se está ejecutando en el puerto 4900.');
