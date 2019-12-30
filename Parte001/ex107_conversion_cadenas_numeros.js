// Ejercicio 107: Convertir cadenas de caracteres a números.

// parseInt(str), parseFloat(str)

let cadena = '19';

let numero = parseInt(cadena);

console.log(typeof cadena);
console.log(typeof numero);

console.log(cadena);
console.log(numero);

console.log();

numero = Number.parseInt(cadena);
console.log(numero);

console.log();

cadena = '17';

numero = Number(cadena);
console.log(numero);

console.log();

cadena = '2.7172';
numero = parseFloat(cadena);
console.log(typeof numero);
console.log(numero);

console.log(Number(cadena));
