// Ejercicio 786: Definir una función para computar las sumas parciales entre los números de un arreglo.

// [1, 2, 3, 4, 5]
// [1, 3, 6, 14, 15]    // n(n + 1) / 2 => 5(6) / 2 = 30/2 = 15
// Array.prototype.every()

function sumasAcumulativas(numeros) {
    if (Array.isArray(numeros)) {
        if (numeros.length) {
            if (numeros.every((n) => typeof n === 'number')) {
                let resultado = [];

                for(let i = 0; i < numeros.length; ++i) {
                    resultado[i] = 0;

                    for(let j = 0; j < i + 1; ++j) {
                        resultado[i] += numeros[j];
                    }
                }

                return resultado;
            } else {
                throw TypeError('Todos los elementos del arreglo deben ser números.');
            }
        } else {
            return null;
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(sumasAcumulativas([1, 2, 3, 4, 5]));    // [1, 3, 6, 10, 15]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumasAcumulativas([2, 3, 5, 7, 11]));    // [2, 5, 10, 17, 28]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumasAcumulativas({a: 1, b: 2}));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumasAcumulativas([2, 3, 5, 7, '11']));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumasAcumulativas([]));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
