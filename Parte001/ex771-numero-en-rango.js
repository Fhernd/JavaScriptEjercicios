// Ejercicio 771: Crear una función para validar si un número se halla en un rango dado.

function validarRango(numero, inicio, final) {
    if (typeof numero === 'number' && typeof inicio === 'number' && typeof final === 'number') {
        if (inicio < final) {
            return numero >= inicio && numero <= final;
        } else {
            throw Error('El valor de inicio debe ser menor al valor final.');
        }
    } else {
        throw TypeError('Los tres argumentos deben ser números.')
    }
}

try {
    console.log(validarRango(5, 1, 10));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRango(0.5, 0, 1));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRango(1.5, 0, 1));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRango('uno', 0, 1));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRango(1.5, 2, 1));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
