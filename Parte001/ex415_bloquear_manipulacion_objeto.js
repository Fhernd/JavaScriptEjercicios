// Ejercicio 415: Usar el método Object.freeze() para prevenir cualquier cambio en un objeto.

'use strict'

let persona = {
    nombre: 'Daniela',
    mostrarNombre: function () {
        console.log(`Nombre: ${this.nombre}`);
    }
};

console.log(persona);
persona.mostrarNombre();

console.log();

try{
    Object.freeze(persona);

    persona.nombre = 'Daniela Ortiz';
    console.log(persona);
    persona.mostrarNombre();
} catch(e){
    console.log(e);
}

console.log('El script ha finalizado.');
