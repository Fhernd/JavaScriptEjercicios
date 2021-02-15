// Ejercicio 976: Crear una función personalizada para obtener los factores de un número entero positivo.

function obtenerFactores(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    if (!Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 0) {
        throw Error('El argumento debe ser un número entero positivo.');
    }

    let factores = [];
    
    for (let i = 1; i <= Math.floor(Math.sqrt(numero)); ++i) {
        if (numero % i == 0) {
            factores.push(i);

            if (numero / i !== i) {
                factores.push(numero / i);
            }
        }
    }

    factores.sort((a, b) => a - b);

    return factores;
}

try {
    console.log(obtenerFactores(13));   // [1, 13]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactores(15));   // [1, 3, 5, 15]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactores(19));   // [1, 19]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactores(19.17));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactores(-19));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactores('John'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
