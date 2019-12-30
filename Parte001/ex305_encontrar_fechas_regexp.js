// Ejercicio 305: Comprobar si una cadena de caracteres cumple con el formato de fecha.

// DD-MM-AAAA HH:MM

let patron = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

let fecha = '11-12-2019 17:41';

console.log(patron.test(fecha));

fecha = '2019-12-11 17:41';
console.log(patron.test(fecha));
