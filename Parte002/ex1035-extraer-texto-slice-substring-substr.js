// Ejercicio 1035: Usar los métodos slice(), substring(), y substr() para extraer texto de una cadena.

let lenguajes = 'Python, JavaScript, Kotlin';

// slice()
// Los índices de extracción pueden ser negativos.

// Índices positivos:
let resultado = lenguajes.slice(8, 18);
console.log(resultado);

console.log();

// Índices negativos:
resultado = lenguajes.slice(-18, -8);
console.log(resultado);

console.log();

// substring():
// A diferencia de slice(), no permite índices negativos:

resultado = lenguajes.substring(8, 18);
console.log(resultado);

console.log();

// substr():
resultado = lenguajes.substr(8, 10);
console.log(resultado);
