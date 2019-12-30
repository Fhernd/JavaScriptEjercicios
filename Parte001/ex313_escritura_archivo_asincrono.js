// Ejercicio 313: Crear un archivo de texto plano usando un objeto Promise en Node.js.

const fs = require('fs');

let promesaEscrituraArchivo = new Promise((resolve, reject) => {
    fs.writeFile('ex313_archivo_texto.txt', 'Node.js v. 10.0', (error) => {
        if(error){
            reject(error);
        } else {
            resolve();
        }
    });
});

promesaEscrituraArchivo
.then(() => {
    console.log('La escritura del archivo ha sido satisfactoria.');
})
.catch((error) => {
    console.log('Ha ocurrido un error:', error);
});
