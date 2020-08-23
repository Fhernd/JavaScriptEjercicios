// Ejercicio 780: Encontrar el número entero par mayor en un arreglo de números.

function sonNumeroEnteros(numeros) {
    for(const n of numeros) {
        if (!(typeof n === 'number') || !Number.isInteger(n)) {
            return false;
        }
    }

    return true;
}

function obtenerEnteroParMayor(numeros) {
    if (Array.isArray(numeros)) {
        if (numeros.length) {
            if (sonNumeroEnteros(numeros)) {
                
                let enteroParMayor = null;

                for(const n of numeros) {
                    if (enteroParMayor == null && n % 2 == 0) {
                        enteroParMayor = n;
                    }

                    if (enteroParMayor) {
                        if (n % 2 == 0 && n > enteroParMayor) {
                            enteroParMayor = n;
                        }
                    }
                }

                return enteroParMayor;

            } else {
                throw TypeError('Todos los elementos del arreglo deben ser números enteros.');
            }
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(obtenerEnteroParMayor([1, -3, 8, 3, 1, 2, 6])); // 8
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnteroParMayor([1, 3, 5, 7, 9, 11])); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnteroParMayor([1, '3', 5, 7, 9, 11])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnteroParMayor({})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
