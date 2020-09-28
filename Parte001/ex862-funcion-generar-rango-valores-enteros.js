// Ejercicio 862: Crear una función para generar un arreglo con un rango de valores.

// 6 => [0, 1, 2, 3, 4, 5, 6]
// 0, 6, 2 => [0, 2, 4, 6]
// 4, 8 => [4, 5, 6, 7, 8]

function generarRango(final, inicio=0, salto=1) {
    if (typeof final != 'number' || !Number.isInteger(final)) {
        throw TypeError('El argumento final debe ser un número entero.');
    }
    
    if (typeof inicio != 'number' || !Number.isInteger(inicio)) {
        throw TypeError('El argumento inicio debe ser un número entero.');
    }
    
    if (typeof salto != 'number' || !Number.isInteger(salto)) {
        throw TypeError('El argumento salto debe ser un número entero.');
    }

    return Array.from({length: Math.ceil((final + 1 - inicio) / salto)}).map((v, i) => i * salto + inicio);
}

try {
    console.log(generarRango(6));   // [0, 1, 2, 3, 4, 5, 6]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRango(6, 0, 2));   // [0, 2, 4, 6]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRango(8, 4));   // [4, 5, 6, 7, 8]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRango(8.8, 4));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRango(8, 4.5));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRango(8, 4, '1'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
