// Ejercicio 845: Definir una función para aplicar diferentes funciones sobre varios datos.

function aplicarFunciones(...funciones) {
    return (...argumentos) => funciones.map(f => f.apply(null, argumentos));
}

let obtenerMinimoMaximo = aplicarFunciones(Math.min, Math.max);

let resultado = obtenerMinimoMaximo(2, 3, 1, 7, 11, 13, 5);
console.log(resultado); // [1, 13];

console.log();

resultado = obtenerMinimoMaximo(2, 3, 1, -7, 11, -13, 5);
console.log(resultado); // [-13, 11];
