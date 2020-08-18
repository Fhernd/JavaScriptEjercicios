// Ejercicio 748: Crear una función para encontrar el elemento más recurrente en un arreglo.

function moda(numeros) {
    if (numeros instanceof Array) {
        if (numeros.length) {
            let ocurrencias = new Map();

            // {5: 2, 2: 3, 3: 1, ...}

            numeros.forEach((valor, indice, arreglo) => {
                if (ocurrencias.has(valor)) {
                    ocurrencias.set(valor, ocurrencias.get(valor)  + 1);
                } else {
                    ocurrencias.set(valor, 1);
                }
            });

            return [...ocurrencias.entries()].reduce((a, v) => v[1] > a[1] ? v : a);
        } else {
            throw Error('El arreglo debe tener al menos un número.');
        }
    } else {
        throw TypeError('El argumento `numeros` debe ser de tipo arreglo.')
    }
}

try {
    console.log(moda([2, 3, 7, 5, 11, 2, 2, 5, 2, 2, 19])); // 2 (5)
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moda('[2, 3, 7, 5, 11, 2, 2, 5, 2, 2, 19]')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moda([])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
