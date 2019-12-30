// Ejercicio 132: Construir un objeto Date con los valores de año, mes y día.

let agnio = 1994;
let mes = 5;
let dia = 21;

let fechaNacimiento = new Date(agnio, mes, dia);

console.log(typeof fechaNacimiento);
console.log(fechaNacimiento instanceof Date);
console.log(fechaNacimiento);
