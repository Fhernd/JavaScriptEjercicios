// Ejercicio 233: Comprobar si una llave existe en un mapa usando la función has().

let produccion = new Map();

produccion.set('ENE', 150);
produccion.set('FEB', 130);
produccion.set('MAR', 100);

console.log(produccion);

console.log();

console.log(produccion.has('FEB'));
console.log(produccion.has('NOV'));
