// Ejercicio 775: Crear una función para comprobar si una matriz es triangular inferior.

// Matriz (cuadrada) triangular inferior tiene todos los elementos por encima de la diagonal principal iguales cero (0).

function sonTodosArreglos(matriz) {
    for (const fila of matriz) {
        if (!(fila instanceof Array)) {
            return false;
        }
    }

    return true;
}

function esMatrizTriangularInferior(matriz) {
    if (matriz instanceof Array) {
        if (sonTodosArreglos(matriz)) {
            if (matriz.length === matriz[0].length) {
                for (let i = 0; i < matriz.length; ++i) {
                    for(let j = 0; j < matriz[i].length; ++j) {
                        if (j > i && matriz[i][j] !== 0) {
                            return false;
                        }
                    }
                }

                return true;
            } else {
                throw Error('La matriz debe ser cuadrada.');
            }
        } else {
            throw TypeError('Todas las filas de la matriz deben ser arreglos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

/*
[
  [1, 0, 0],
  [2, 1, 0],
  [3, 2, 8]
]
*/

try {
    console.log(esMatrizTriangularInferior([[1, 0, 0], [2, 1, 0], [3, 2, 8]])); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

/*
[
  [1, 0, 1],
  [2, 1, 0],
  [3, 2, 8]
]
*/

try {
    console.log(esMatrizTriangularInferior([[1, 0, 1], [2, 1, 0], [3, 2, 8]])); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esMatrizTriangularInferior('matriz')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esMatrizTriangularInferior([[1, 0, 1], 'fila', [3, 2, 8]])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
