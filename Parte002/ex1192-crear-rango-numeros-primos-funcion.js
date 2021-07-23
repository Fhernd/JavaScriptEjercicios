// Ejercicio 1192: Crear una función para obtener los números primos desde 2 hasta N.

function obtenerPrimos(maximo) {
    if (typeof maximo != 'number' || !Number.isInteger(maximo)) {
        return null;
    }

    let auxiliar = [];
    let primos = [];

    for(let i = 2; i <= maximo; ++i) {
        if (!auxiliar[i]) {
            primos.push(i);

            for(let j = i << 1; j <= maximo; j += i) {
                auxiliar[j] = true;
            }
        }
    }

    return primos;
}

console.log(obtenerPrimos(15)); // [2, 3, 5, 7, 11, 13]
console.log(obtenerPrimos(5)); // [2, 3]
console.log(obtenerPrimos(100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, ...]
console.log(obtenerPrimos(100).length); // 25
