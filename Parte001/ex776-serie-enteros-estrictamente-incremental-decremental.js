// Ejercicio 776: Determinar si un arreglo contiene elementos estrictamente incrementales o decrementales.

// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [-3, -2, -1, 0, 1] => true
// [1, 2, 3, 5, 6] => false

function esArregloConValoresEnteros(numeros) {
    for(const n of numeros) {
        if (!typeof n === 'number' || !Number.isInteger(n)) {
            return false;
        }
    }

    return true;
}

function esArregloMonotono(numeros) {
    if (numeros instanceof Array) {
        if (esArregloConValoresEnteros(numeros)) {
            if (numeros.length === 1) {
                return true;
            }

            let direccion = numeros[1] - numeros[0];

            for(let i = 0; i < numeros.length - 1; ++i) {
                if ((numeros[i + 1] - numeros[i]) * direccion <= 0 || Math.abs(numeros[i + 1] - numeros[i]) > 1) {
                    return false;
                }
            }

            return true; 
        } else {
            throw TypeError('Todos los elementos del arreglo deben ser números enteros.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(esArregloMonotono([1, 2, 3, 4, 5]));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esArregloMonotono([5, 4, 3, 2, 1]));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esArregloMonotono([-3, -2, -1, 0, 1, 2, 3, 4]));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esArregloMonotono([-3, -2, -1, 0, 1, 2, 3, 5]));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esArregloMonotono('arreglo'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
