// Ejercicio 649: Mostrar la fecha y hora en el siguiente formato Día HH AM/PM : MM : SS.

let hoy = new Date();
let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

let numeroDiaSemana = hoy.getDay();

console.log(`Hoy es: ${dias[numeroDiaSemana]}`);

console.log();

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();

let jornada = horas >= 12 ? 'PM' : 'AM';

minutos = ('0' + minutos).slice(-2);
segundos = ('0' + segundos).slice(-2);

console.log(`${horas % 12} ${jornada} : ${minutos} : ${segundos}`);
