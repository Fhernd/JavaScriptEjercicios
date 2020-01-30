// Ejercicio 391: Crear una función para implementar el algoritmo recursivo de la resta.

// Análisis:
// a = 2 , b = 3
// 1 + 1 - (1 + 1 + 1) = 2 - 3 = -1

function restar(a, b) {
    return b == 0 ? a : b < 0 ? restar(a - 1, b + 1) : restar(a - 1, b - 1);
}

console.log(restar(2, 3));
console.log(restar(10, 3));
console.log(restar(-1, -3));
