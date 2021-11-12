// Ejercicio 1414: Validar por medio de una función si un dato es lógico (booleano).

// true, false

function esBooleano(dato) {
    return dato === true || dato === false || toString.call(dato) === '[object Boolean]';
}

console.log(esBooleano(true));  // true
console.log(esBooleano(false));  // true
console.log(esBooleano(new Boolean()));  // true

console.log();

console.log(esBooleano('true'));    // false
console.log(esBooleano('false'));    // false
console.log(esBooleano({a: 123}));    // false
