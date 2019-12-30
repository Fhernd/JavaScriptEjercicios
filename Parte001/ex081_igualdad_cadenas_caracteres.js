// Ejercicio 81: Comparar si dos cadenas de caracteres son iguales.

let cadena1 = "JavaScript";
let cadena2 = "JS";

console.log(cadena1 == cadena2);

cadena2 = 'JavaScript';

console.log(cadena1 == cadena2);

console.log();

cadena1 = 'A';
cadena2 = '\u0041';

console.log(cadena1);
console.log(cadena2);

console.log(cadena1 == cadena2);

console.log();

cadena1 = 'JavaScript';
cadena2 = '\u004a\u0061\u0076\u0061\u0053\u0063\u0072\u0069\u0070\u0074';

console.log(cadena1);
console.log(cadena2);

console.log(cadena1 == cadena2);

console.log(cadena1 === cadena2);
