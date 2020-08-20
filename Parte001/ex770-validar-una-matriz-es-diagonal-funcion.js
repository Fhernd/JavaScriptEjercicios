// Ejercicio 770: Crear una función personalizada para validar si una matriz es diagonal.

// [ 1 0 0 ]
// [ 0 3 0 ]
// [ 0 0 2 ]

function sonArreglos(matriz) {
    for(let i = 0; i < matriz.length; ++i) {
        if (!(matriz[i] instanceof Array)) {
            return false;
        }
    }

    return true;
}

function esMatrizDiagonal(matriz) {
    if (matriz instanceof Array) {
        if(sonArreglos(matriz)) {
            for(let i = 0; i < matriz.length; ++i) {
                for(let j = 0; j < matriz[i].length; ++j) {
                    if (i != j && matriz[i][j] !== 0) {
                        return false;
                    }
                }
            }

            return true;
        } else {
            throw TypeError('Todos los elementos de la matriz deben ser arreglos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.')
    }
}

try {
    console.log(esMatrizDiagonal([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esMatrizDiagonal([[1, 0, 9], [0, 2, 0], [0, 0, 3]]));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esMatrizDiagonal([[1, 0, 0], [0, 2, 0], [7, 0, 3]]));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esMatrizDiagonal([[1, 0, 0], 100, [7, 0, 3]]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
