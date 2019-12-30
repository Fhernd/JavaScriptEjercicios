// Ejercicio 231: Eliminar todos los elementos de un mapa con la función clear().

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);

console.log(produccion);
console.log(produccion.size);

console.log();

produccion.clear();
console.log(produccion);
console.log(produccion.size);
