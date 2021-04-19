// Ejercicio 1042: Definir una función para encontrar el n-ésimo elemento más grande de un arreglo.

// [7, 3, 5, 11, 13]
// [3, 5, 7, 11, 13]
// n = 3
// => 7

function enesimoMasGrande(numeros, n) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (!numeros.every(d => typeof d == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (n <= 0) {
        return null;
    }

    if (n > numeros.length) {
        throw Error('El segundo argumento puede exceder la cantidad de elementos que tiene el arreglo.');
    }

    numeros.sort((a, b) => a - b);

    return numeros.slice(-n, n)[0];
}

let numeros = [7, 3, 5, 11, 13];

try {
    console.log(enesimoMasGrande(numeros, 3));  // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(enesimoMasGrande({a: 1}, 3));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(enesimoMasGrande([2, 3, 5, 'a'], 3));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();


try {
    console.log(enesimoMasGrande(numeros, '5'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
