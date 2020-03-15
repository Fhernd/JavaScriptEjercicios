// Ejercicio 545: Usar el módulo fs para crear un archivo de texto plano con Node.js.

let fs = require('fs');

let texto = 'JavaScript es tremendo.';

fs.writeFile('javascript.txt', texto, {encoding: 'utf8'}, function(error){
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log('La escritura se ha realizado de forma satisfactoria.');
    }
});
