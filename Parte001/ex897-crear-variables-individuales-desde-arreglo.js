// Ejercicio 897: Crear variables individuales a partir de los elementos de un arreglo.

function obtenerValores() {
    return [2, 3, 5];
}

let resultado = obtenerValores();
console.log(resultado);

console.log();

// Solución #1:
let a = resultado[0], b = resultado[1], c = resultado[2];
console.log(a, b, c);

console.log();

// Solución #2 (ES6):
let [x, y, z] = resultado;
console.log(x, y, z);

console.log();

let [m, n, p] = obtenerValores();
console.log(m, n, p);
