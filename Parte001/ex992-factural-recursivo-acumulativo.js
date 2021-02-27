// Ejercicio 991: Definir una función para calcular el factorial de un número dado usando un acumulador.

function calcularFactorialRecursivo(n, a) {
    if (n == 0) {
        return a;
    } else {
        return calcularFactorialRecursivo(n - 1, a * n);
    }
}

// 5! = 120
// 6! = 720
// 7! = 5040

console.log(calcularFactorialRecursivo(5, 1)); // 120

console.log(calcularFactorialRecursivo(6, 1)); // 720
console.log(calcularFactorialRecursivo(7, 1)); // 5040
