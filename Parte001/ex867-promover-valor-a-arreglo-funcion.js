// Ejercicio 867: Crear una función personalizada para promover un valor a un arreglo.

function promoverAArreglo(dato) {
    return Array.isArray(dato) ? dato : [dato];
}

console.log(promoverAArreglo([1, 2, 3]));   // [1, 2, 3]
console.log(promoverAArreglo([]));   // []
console.log(promoverAArreglo(new Array(0)));   // []
console.log(promoverAArreglo(Array(0)));   // []

console.log();

console.log(promoverAArreglo(1));   // [1]
console.log(promoverAArreglo(undefined));   // [undefined]
console.log(promoverAArreglo(null));   // [null]
console.log(promoverAArreglo({}));   // [{}]
console.log(promoverAArreglo({a: 1}));   // [{a: 1}]
