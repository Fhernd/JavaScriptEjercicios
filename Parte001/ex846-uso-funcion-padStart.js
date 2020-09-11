// Ejercicio 846: Mostrar el uso de la función padStart() del objeto String.

let numero = '123';
console.log(numero);

console.log();

console.log(numero.padStart(5, '0'));  // '00123'

console.log();

let numeroTarjetaCredito = '5294123498761234';
console.log(numeroTarjetaCredito);

console.log(numeroTarjetaCredito.slice(-4).padStart(numeroTarjetaCredito.length, '*'));
