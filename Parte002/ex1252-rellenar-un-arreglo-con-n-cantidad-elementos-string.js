// Ejercicio 1252: Definir una función para rellenar un arreglo con n cantidad de elementos String.

function rellenarArreglo(n, dato) {
    return Array.apply(null, Array(n)).map(String.prototype.valueOf, dato);
}

let resultado = rellenarArreglo(100, 'JS');
console.log(resultado); // ['JS', 'JS', ..., 'JS']
console.log(resultado.length);  // 1000
