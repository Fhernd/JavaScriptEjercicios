// Ejercicio 730: Comprobar que un arreglo no contenga dos elementos específicos.

function noContieneElementos(arreglo, valor1, valor2) {
    if (arreglo instanceof Array) {
        return arreglo.indexOf(valor1) === -1 && arreglo.indexOf(valor2) === -1;
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(noContieneElementos([1, 2, 3], 1, 3));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(noContieneElementos([1, 2, 3], 11, 13));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(noContieneElementos("[1, 2, 3]", 11, 13));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
