// Ejercicio 1173: Aplicar las operaciones aritméticas básicas sobre valores monetarios.

let precio1 = '$10.25';
let precio2 = '$20.50';

let regex = /[^0-9.-]+/g;

let numero1 = parseFloat(precio1.replace(regex, ''));
let numero2 = parseFloat(precio2.replace(regex, ''));

let suma = numero1 + numero2;
console.log(suma);  // 30.75

let resta = numero1 - numero2;
console.log(resta);  // -10.25

let multiplicacion = numero1 * numero2;
console.log(multiplicacion);  // 210.125

let division = numero1 / numero2;
console.log(division);  // 0.5
