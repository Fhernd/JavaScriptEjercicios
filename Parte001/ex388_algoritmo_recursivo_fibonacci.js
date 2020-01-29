// Ejercicio 388: Crear una función para implementar el algoritmo recursivo de Fibonacci.

// f(n) = f(n-1) + f(n-2)
// f(0) = 0, f(1) = 1

function fibonacci(n){
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// 0 1 1 2 3 5 8 13 21 34 55 89 ...

console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(9));
console.log(fibonacci(11));
console.log(fibonacci(12));
console.log(fibonacci(13));
console.log(fibonacci(14));
console.log(fibonacci(15));
