// Ejercicio 230: Agregar y eliminar elementos en un mapa con las funciones set() y delete().

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);

console.log(produccion);
console.log(produccion.size);

console.log();

produccion.delete('ENE');
console.log(produccion);
console.log(produccion.size);

console.log();

console.log(produccion.delete('NOV'));
console.log(produccion);
console.log(produccion.size);
