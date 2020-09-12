// Ejercicio 847: Mostrar el uso de la función padEnd() del objeto String.

let lenguaje = 'JavaScript es un lenguaje de programación';
console.log(lenguaje);
console.log(lenguaje.length);

console.log();

console.log(lenguaje.padEnd(50, '.'));
console.log(lenguaje.substring(0, 10).padEnd(13, '.')); // JavaScript...
