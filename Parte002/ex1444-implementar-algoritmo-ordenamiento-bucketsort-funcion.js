// Ejercicio 1444: Implementar el algoritmo de ordenamiento bucket sort en una función.

function bucketSort(datos, n) {
    let minimo = Math.min(...datos);
    let maximo = Math.max(...datos);

    const buckets = Array.from({length: Math.floor((maximo - minimo) / n) + 1}, () => []);

    datos.forEach(d => {
        buckets[Math.floor((d - minimo) / n)].push(d);
    });

    return buckets.reduce((a, b) => [...a, ...b.sort((d1, d2) => d1 - d2)], []);
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = bucketSort(primos, primos.length);
console.log(resultado);
