// Ejercicio 1046: Generar un número aleatorio entero entre un rango dado usando la función Math.random().

let inicio = 1;
let fin = 100;

let enteroAleatorio = inicio + Math.floor(Math.random() * fin);
console.log(enteroAleatorio);
