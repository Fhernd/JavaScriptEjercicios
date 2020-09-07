// Ejercicio 838: Computar el tiempo que tarda una función en ejecutarse usando console.time().

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.time('medición 1');
// fibonacci(10); // 0.164ms
// fibonacci(20); // 3.753ms
// fibonacci(40);  // 1.304s
// fibonacci(50); // 2:52.075 (m:ss.mmm)
// memoization
console.timeEnd('medición 1');
