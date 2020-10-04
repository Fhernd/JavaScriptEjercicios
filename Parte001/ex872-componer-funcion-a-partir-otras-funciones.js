// Ejercicio 872: Componer una función a partir de otras funciones.

function multiplicar(a, b) {
    return a * b;
}

function sumar10(valor) {
    return valor + 10;
}

function componerFuncion(...funciones) {
    return funciones.reduce((f, g) => (...argumentos) => f(g(...argumentos)));
}

let sumarMultiplicar = componerFuncion(sumar10, multiplicar);
let resultado = sumarMultiplicar(3, 7);

console.log(resultado); // 31
