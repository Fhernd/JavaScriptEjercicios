// Ejercicio 991: Definir una función para calcular el factorial de un número dado.

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 1! = 1
// 0! = 1

function factorialRecursivo(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}

console.log(factorialRecursivo(5)); // 120

// n = 5 -> 5 * 24 = 120
//   n = 4 -> 4 * 6
//     n = 3 -> 3 * 2
//       n = 2 -> 2 * 1
//         n = 1 -> 1 * 1
//           n = 0 -> 1
