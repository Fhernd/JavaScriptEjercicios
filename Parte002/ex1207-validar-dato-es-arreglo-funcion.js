// Ejercicio 1207: Crear una función para determinar si un dato es de tipo arreglo (Array).

function esArreglo(dato) {
    return toString.call(dato) === '[object Array]';
}

console.log(esArreglo('[2, 3, 5]'));    // false
console.log(esArreglo([2, 3, 5]));    // true
console.log(esArreglo([]));    // true

console.log();

console.log(esArreglo(new Array(10)));    // true
console.log(esArreglo(new Set()));    // false

console.log();

console.log(esArreglo(undefined));  // false
console.log(esArreglo(null));   // false
