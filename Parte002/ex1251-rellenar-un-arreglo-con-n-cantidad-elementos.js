// Ejercicio 1251: Definir una función para rellenar un arreglo con n cantidad de elementos.

function rellenarArreglo(n, dato) {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, dato);
}

let resultado = rellenarArreglo(10, 5);
console.log(resultado);
console.log(resultado.length);

console.log();

resultado = rellenarArreglo(5, 100);
console.log(resultado);
console.log(resultado.length);
