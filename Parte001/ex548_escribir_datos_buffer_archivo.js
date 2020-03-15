// Ejercicio 548: Escribir datos en un archivo con un objeto Buffer usando Node.js.

const fs = require('fs');

let texto = 'JavaScript es tremendo.\n';

let buffer = new Buffer(texto, 'utf8');

fs.writeFile('javascript-buffer.txt', buffer, function(error){
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log('Se ha escrito el contenido en el archivo javascript-buffer.txt.');
    }
});
