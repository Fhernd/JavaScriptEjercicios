// Ejercicio 966: Definir una función para generar un patrón de triángulo con un carácter específico.

// #
// ##
// ###
// ####
// #####
// ######
// #######

function generarTriangulo(caracter, altura) {
    if (typeof caracter != 'string') {
        throw TypeError('El argumento «caracter» debe ser una cadena de caracteres.');
    }

    if (caracter.length != 1) {
        throw Error('El argumento «caracter» debe tener longitud igual a 1.');
    }

    if (typeof altura != 'number') {
        throw TypeError('El argumento «altura» debe ser un número.');
    }

    if (!Number.isInteger(altura)) {
        throw Error('El argumento «altura» debe ser un número entero.');
    }

    if (altura < 0) {
        throw Error('El argumento «altura» deber ser un número entero positivo.');
    }

    for(let i = 1; i <= altura; ++i) {
        console.log(caracter.repeat(i));
    }
}

try {
    generarTriangulo('#', 10);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    generarTriangulo('*', 20);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    generarTriangulo({a: 100}, 20); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    generarTriangulo('##', 20); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    generarTriangulo('#', new Set()); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    generarTriangulo('#', 1.4142); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
