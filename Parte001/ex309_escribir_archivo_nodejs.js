// Ejercicio 309: Escribir un archivo en disco de forma asíncrona con Node.js.

const fs = require('fs');

fs.appendFile('Parte001/ex309_saludo.txt', '¡Hola JavaScript!', (error) => {
    if (error){
        throw error;
    }

    console.log('El archivo se ha guardado de forma satisfactoria.');
});
