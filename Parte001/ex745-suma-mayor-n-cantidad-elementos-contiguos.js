// Ejercicio 745: Obtener la suma mayor de n cantidad de elementos continguos en un arreglo.

// [3, 7, 1, 11, 2, 13]
// n = 2
// 15

function obtenerSumaMaximaElementosContiguos(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            if (n >= 1 && n < numeros.length) {
                let resultado = 0;
                let sumaMaxima = 0;

                for(let i = 0; i < n - 1; ++i) {
                    sumaMaxima += numeros[i];
                }

                for(let i = n - 1; i < numeros.length; ++i) {
                    sumaMaxima += numeros[i];

                    if (sumaMaxima > resultado) {
                        resultado = sumaMaxima;
                    }

                    sumaMaxima -= numeros[i - n + 1];
                }

                return resultado;
            } else {
                throw Error('El segundo argumento debe ser mayor o igual a 1, y menor o igual a la cantidad de elementos que tiene el arreglo.');
            }
        } else {
            throw TypeError('El segundo argumento debe ser un número entero.');
        }
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], 2));  // 15
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], 3));  // 26
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], 5));  // 34
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos("[3, 7, 1, 11, 2, 13]", 5));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], '5'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], -5));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaMaximaElementosContiguos([3, 7, 1, 11, 2, 13], 7));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
