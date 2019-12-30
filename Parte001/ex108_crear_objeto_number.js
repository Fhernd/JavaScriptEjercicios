// Ejercicio 108: Crear un objeto de tipo Number.

let numero = new Number(19);

 console.log(typeof numero);
 console.log(numero);

console.log(numero instanceof Number);

let primitivo = parseInt(numero.toString())

console.log(typeof primitivo);
console.log(primitivo);

console.log();

let suma = numero + primitivo;

console.log(typeof suma);
console.log(suma);
