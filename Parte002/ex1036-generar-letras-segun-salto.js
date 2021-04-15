// Ejercicio 1036: Definir una función para generar rango de letras según un valor de salto dado.

// inicio = A
// final = F
// salto = 1
// => ['A', 'B', 'C', 'D', 'E', 'F']

// salto = 2
// => ['A', 'C', 'E']

function generarRangoLetras(inicio, final, salto=1) {
    if (typeof inicio != 'string' || typeof final != 'string') {
        throw TypeError('Los parámetros inicio y final deben ser de tipo string.');
    }

    if (typeof salto != 'number' || !Number.isInteger(salto)) {
        throw TypeError('El parámetro salto debe ser un número entero.');
    }

    if (salto <= 0) {
        throw Error('El parámetro salto debe ser un número entero positivo.');
    }

    let rango = [];

    inicio = inicio.charCodeAt(0);
    final = final.charCodeAt(0);

    while (salto > 0 ? final >= inicio : final <= inicio) {
        rango.push(String.fromCharCode(inicio));

        inicio += salto;
    }

    return rango;
}

try {
    console.log(generarRangoLetras('A', 'F'));  // ['A', 'B', 'C', 'D', 'E', 'F']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoLetras('A', 'F', 2));  // ['A', 'C', 'E']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoLetras('A', 'F', 10));  // ['A']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoLetras(200, 'F', 10));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
