// Ejercicio 951: Aplicar una función de reducción sobre un conjunto de datos.

function aplicarFuncion(datos, fn=Math.min) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (typeof fn != 'function') {
        throw TypeError('El argumento «fn» debe ser una función.');
    }

    return fn(...datos);
}

function calcularPromedio(...datos) {
    return datos.reduce((a, v) => {
        a += v;
        return a;
    }, 0) / datos.length;
}

try {
    console.log(aplicarFuncion([2, 3, 5, 7, 11]));  // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncion([2, 3, 5, 7, 11], Math.max));  // 11
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncion([2, 3, 5, 7, 11], calcularPromedio));  // 28/5 = 5.6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncion(1000, calcularPromedio));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
