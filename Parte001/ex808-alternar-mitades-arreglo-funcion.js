// Ejercicio 808: Crear una función para alternar las dos mitades de un arreglo.

// [1, 2, 3, 4, 5, 6] => [4, 5, 6, 1, 2, 3]

function alternarMitadesArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (datos.length % 2 === 1) {
        return null;
    }

    for(let i = 0; i < datos.length / 2; ++i) {
        let temporal = datos[i];
        datos[i] = datos[i + datos.length / 2];
        datos[i + datos.length / 2] = temporal;
    }

    return datos;
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
    console.log(alternarMitadesArreglo(1000));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
