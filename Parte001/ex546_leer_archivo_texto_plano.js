// Ejercicio 546: Usar el módulo fs para leer un archivo de texto plano con Node.js.

let fs = require('fs');

fs.readFile('javascript.txt', {encoding: 'utf8'}, function(error, datos){
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log('Datos leídos:');
        console.log(datos);
    }
});
