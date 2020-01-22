// Ejercicio 337: Convertir una fecha en formato ISO 8601 en un objeto tipo fecha.

let fechaIso8601 = '2020-1-22T14:26:19Z';
console.log(fechaIso8601);

fechaIso8601 = fechaIso8601.replace(/\D/g, ' ');
console.log(fechaIso8601);

let componentes = fechaIso8601.split(' ');
--componentes[1];
console.log(componentes);

console.log();

let fecha = new Date(Date.UTC.apply(null, componentes));

console.log(typeof fecha);
console.log(fecha);
console.log(fecha.toString());
