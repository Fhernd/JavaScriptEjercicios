// Ejercicio 873: Componer una función usando una evaluación de izquierda a derecha.

function sumar(a, b) {
    return a + b;
}

function cubo(numero) {
    return Math.pow(numero, 3);
}

function componerFuncion(...funciones) {
    return funciones.reduce((f, g) => (...argumentos) => g(f(...argumentos)))
}

let sumarCubo = componerFuncion(sumar, cubo);
let resultado = sumarCubo(2, 3);
console.log(resultado); // 125

console.log();

resultado = sumarCubo(3, 7);
console.log(resultado); // 1000
