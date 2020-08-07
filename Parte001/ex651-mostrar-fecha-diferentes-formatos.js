// Ejercicio 651: Crear un objeto Date para mostrar la fecha actual en diferentes formatos.

let hoy = new Date();

let dia = hoy.getDate();
let mes = hoy.getMonth() + 1;
let agnio = hoy.getFullYear();

dia = ('0' + dia).slice(-2);
mes = ('0' + mes).slice(-2);

// AAAA-MM-DD:
let formato1 = `${agnio}-${mes}-${dia}`;
console.log(formato1);

console.log();

// DD/MM/AAAA
let formato2 = `${dia}/${mes}/${agnio}`;
console.log(formato2);

console.log();

// MM/DD, AAAA
let formato3 = `${mes}/${dia}, ${agnio}`;
console.log(formato3);
