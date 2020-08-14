// Ejercicio 729: Comprobar que un arreglo tenga al menos uno de dos elementos específicos.

function tieneElementos(arreglo, valor1, valor2) {
    if (arreglo instanceof Array) {
        return arreglo.indexOf(valor1) !== -1 || arreglo.indexOf(valor2) !== -1;
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(tieneElementos([1, 2, 3], 8, 3));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneElementos([1, 2, 3], 8, 11));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneElementos("[1, 2, 3]", 8, 11));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneElementos([], 8, 11));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}
