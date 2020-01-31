// Ejercicio 402: Uso de la técnica de memoización para la serie Fibonacci.

// Análisis:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// n = 3
// 0, 1, 1
// n = 5
// 0, 1, 1, 2, 3

let fibonacci = function() {
    let memoizacion = [0, 1];
    let fib = function(n) {
        let resultado = memoizacion[n];

        if (typeof resultado != 'number'){
            resultado = fib(n - 1) + fib(n - 2);
            memoizacion[n] = resultado;
        }

        return resultado;
    };

    return fib;
}();

console.log(fibonacci(10));
console.log(fibonacci(20));
