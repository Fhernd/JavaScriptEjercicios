// Ejercicio 73: Uso del operador in para consultar propiedades de un objeto.

let computador = {id: 1001, procesador: 'Intel Core i7', ram: 32};

console.log('id' in computador);
console.log('ram' in computador);
console.log('board' in computador);

console.log();

let fecha = new Date();

console.log(fecha);
console.log('getTime' in fecha);
console.log('getLastMonth' in fecha);
