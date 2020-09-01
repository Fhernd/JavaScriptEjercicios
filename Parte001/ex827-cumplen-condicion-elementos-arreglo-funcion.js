// Ejercicio 827: Crear una función para validar si todos los elementos de un arreglo cumplen una condición.

function elementosCumplenCondicion(datos, validador=Boolean) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (!datos.every(d => typeof d === 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números');
    }
    
    if (typeof validador !== 'function') {
        throw TypeError('El argumento «validador» debe ser una función.');
    }

    return datos.every(validador);
}

try {
    console.log(elementosCumplenCondicion([2, 3, 5, 7], e => e > 0));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion([2, 3, 5, 7], e => e >= 5));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion([2.3, 3.7, 5.11, 7.13], e => e > 0));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion([2.3, 3.7, 5.11, 7.13], function(e) { return e > 0; }));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

function validadorDatos(dato) {
    return dato > 0;
}

console.log();

try {
    console.log(elementosCumplenCondicion([2.3, 3.7, 5.11, 7.13], validadorDatos));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion(new Object(), validadorDatos));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion([2.3, "3.7", 5.11, 7.13], validadorDatos));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementosCumplenCondicion([2.3, 3.7, 5.11, 7.13], new Map()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
