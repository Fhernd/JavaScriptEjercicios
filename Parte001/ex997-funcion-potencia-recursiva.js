// Ejercicio 997: Definir una función recursiva para calcular la potencia de un número.

// a ^ b = a_1 * a_2 * ... * a_(b - 1) * a_b
// 2 ^ 3 = 2 * 2 * 2 = 8

function potencia(a, b) {
    if (b == 0) {
        return 1;
    } else {
        return a * potencia(a, b - 1);
    }
}

console.log(potencia(2, 3));    // 8
console.log(potencia(2, 5));    // 32
console.log(potencia(2, 7));    // 128
console.log(potencia(3, 4));    // 81
