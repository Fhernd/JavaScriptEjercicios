// Ejercicio 414: Comprobar si un objeto es extensible con la función Object.isExtensible().

'use strict'

let persona = {
    nombre: 'Edward',
    mostrarNombre: function() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

console.log(persona);
persona.mostrarNombre();
console.log(Object.isExtensible(persona));
console.log();

try {
    Object.preventExtensions(persona);
    console.log(Object.isExtensible(persona));

    persona.apellido = 'Ortiz';
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();
console.log(persona);
