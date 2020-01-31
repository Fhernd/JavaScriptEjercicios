// Ejercicio 413: Prevenir la extensión de un objeto a través de Object.preventExtensions().

'use strict'

let persona = {
    nombre: 'Edward',
    mostrarNombre: function() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

console.log(persona);
persona.mostrarNombre();

try {
    Object.preventExtensions(persona);

    persona.apellido = 'Ortiz';
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();
console.log(persona);
