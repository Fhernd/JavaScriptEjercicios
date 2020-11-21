// Ejercicio 918: Definir una función para obtener el enésimo elemento de un arreglo.

function obtenerEnesimoElemento(datos, indice=0) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    if (typeof indice != 'number') {
        throw TypeError('El argumento «indice» debe ser un número.');
    }

    if (!Number.isInteger(indice)) {
        throw Error('El argumento «indice» debe ser un número entero.');
    }

    return (indice > 0 ? datos.slice(indice, indice + 1) : datos.slice(indice))[0];
}

try {
    console.log(obtenerEnesimoElemento(['A', 'B', 'C', 'D', 'E'])); // 'A'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento(['A', 'B', 'C', 'D', 'E'], 3)); // 'D'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento(['A', 'B', 'C', 'D', 'E'], -3)); // 'C'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento({a: 100}, -3)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento(['A', 'B', 'C', 'D', 'E'], new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento([], new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerEnesimoElemento(['A', 'B', 'C', 'D', 'E'], 1.1)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
