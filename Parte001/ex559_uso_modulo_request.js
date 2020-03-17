// Ejercicio 559: Hacer uso del módulo request para descargar una imagen.

const fs = require('fs');
const request = require('request');

request('https://www.google.com/logos/doodles/2020/olga-orozcos-100th-birthday-6753651837108318.2-l.png')
.pipe(fs.createWriteStream('./olga-orozcos.png'));
