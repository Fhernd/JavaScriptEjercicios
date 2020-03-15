// Ejercicio 547: Usar el módulo fs para agregar contenido a un archivo de texto plano con Node.js.

let fs = require('fs');

let nuevoContenido = '\nJavaScript también se puede ejecutar en el servidor para crear aplicaciones tipo backend.\n';

fs.appendFile('javascript.txt', nuevoContenido, function(error){
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log('Se ha agregado nuevo contenido al archivo javascript.txt.');
    }
});
