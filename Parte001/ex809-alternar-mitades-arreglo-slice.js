// Ejercicio 809: Usar la función slice() para alternar las dos mitades de un arreglo.

// Array.prototype.slice()

// [1, 2, 3, 4, 5, 6] => [4, 5, 6, 1, 2, 3]

function alternarMitadesArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (datos.length % 2 === 1) {
        return null;
    }

    return [...datos.slice(datos.length / 2), ...datos.slice(0, datos.length / 2)];
}

try {
    console.log(alternarMitadesArreglo([1, 2, 3, 4, 5, 6]));    // [4, 5, 6, 1, 2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(alternarMitadesArreglo([1, 2, 3, 4, 5, 6, 7]));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(alternarMitadesArreglo(new Object()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
