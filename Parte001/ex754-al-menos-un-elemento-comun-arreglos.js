// Ejercicio 754: Crear una función para comprobar si dos arreglos tienen al menos un elemento en común.

// a = [2, 3, 5, 7]
// b = [1, 3, 5, 7, 9]
// c = [4, 6, 8, 10]

function elementoEnComun(arreglo1, arreglo2) {
    if (arreglo1 instanceof Array && arreglo2 instanceof Array) {
        if (arreglo1.length && arreglo2.length) {
            for(let i = 0; i < Math.min(arreglo1.length, arreglo2.length); ++i) {
                if (arreglo1.indexOf(arreglo2[i]) !== -1) {
                    return true;
                }
            }

            return false;
        } else {
            throw Error('Ambos arreglos deben tener al menos un elemento.');
        }
    } else {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }
}

try {
    console.log(elementoEnComun([2, 3, 5, 7], [7, 9, 11, 13])); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoEnComun([2, 3, 5, 7], [19, 9, 11, 13])); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoEnComun('[2, 3, 5, 7]', [19, 9, 11, 13])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoEnComun([2, 3, 5, 7], '[19, 9, 11, 13]')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoEnComun([], [19, 9, 11, 13])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoEnComun([2, 3, 5, 7], [])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
