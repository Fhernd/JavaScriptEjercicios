// Ejercicio 262: Inyectar expresiones aritméticas en una literal de plantilla.

let nombre = 'Mouse gamer';
let precio = 29;
let cantidadComprada = 3;

let total = precio * cantidadComprada;

let salida = `El producto comprado es ${nombre} y su precio $${precio}. La cantidad comprada es ${cantidadComprada}. Total de la compra: $${precio * cantidadComprada}.`;

console.log(salida);
