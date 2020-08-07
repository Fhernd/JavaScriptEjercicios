// Ejercicio 657: Calcular los días restantes para el próximo 31 de diciembre.

let hoy = new Date();
let diciembre31 = new Date(hoy.getFullYear(), 11, 31);

let milisegundosDia = 1000 * 60 * 60 * 24;

let cantidadDias = Math.ceil((diciembre31.getTime() - hoy.getTime()) / milisegundosDia);

console.log(`La cantidad de días para el siguiente 31 de diciembre es: ${cantidadDias}`);
