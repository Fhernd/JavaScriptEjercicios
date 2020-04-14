// Ejercicio 627: Demostrar la creación de constantes en ECMAScript 5 y 6.

// ES5:
console.log('Definción de una constante en ES5:');
Object.defineProperty(typeof global === 'object' ? global : window, "CONSTANTE_PITAGORICA", {
    value: 1.414213562373095048801688724209698078569671875376948073176,
    enumerable: true,
    writable: false,
    configurable: false
});

console.log(CONSTANTE_PITAGORICA);

console.log();

// ES6
console.log('Definción de una constante en ES6:');

const PITAGORICA = 1.414213562373095048801688724209698078569671875376948073176;

console.log(PITAGORICA);

console.log();

CONSTANTE_PITAGORICA = Math.sqrt(3);

console.log(CONSTANTE_PITAGORICA);

console.log();

// PITAGORICA = Math.sqrt(3); // TypeError
