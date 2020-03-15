// Ejercicio 549: Leer datos desde un archivo escrito con un objeto Buffer usando Node.js.

const fs = require('fs');

fs.readFile('javascript-buffer.txt', function(error, datos) {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        let texto = datos.toString();
        console.log(`Contenido: ${texto}`);
    }
});
