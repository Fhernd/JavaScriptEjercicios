// Ejercicio 389: Crear una función para implementar el algoritmo recursivo de Factorial.

// n! = (n-1) * (n-2) * (n-3) * ... * (n-k)
// 5! = 5 * (5-1) * (5-2) * (5-3) * (5-4)
//    = 5* 4 * 3 * 2 * 1 = 120

// n = 0 => 1, n = 1 => 1 

function factorial(n){
    return n == 0 || n == 1 ? 1 : n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));
