// Ejercicio 643: Uso del método find() para encontrar el primer elemento en un arreglo (ES6).

const array1 = [5, 12, 8, 130, 44];

let found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

found = array1.find(e => e > 200);
console.log(found);
// expected output: undefined
