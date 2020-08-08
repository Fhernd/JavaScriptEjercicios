// Ejercicio 662: Crear una función para obtener la extensión de un archivo.

function obtenerExtension(nombreArchivo) {
    return nombreArchivo.split('.').pop();
}

let nombreArchivo = 'javascript-ejercicio.js';
console.log(nombreArchivo);

let extension = obtenerExtension(nombreArchivo);
console.log(extension);

console.log();

nombreArchivo = 'javascript-ejercicio.662.js';
console.log(nombreArchivo);

extension = obtenerExtension(nombreArchivo);
console.log(extension);
