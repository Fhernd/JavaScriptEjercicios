// Ejercicio 1019: Obtener la cantidad máxima de ceros consecutivos en un número binario.

// Análisis:

// 1001100001 => 4
// 00 0000
// => [2, 4]

// 100010001110000000 => 7

function obtenerCantidadMaximaCerosConsecutivos(binario) {
    if (typeof binario != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let bits = binario.split('');

    if (!bits.every(e => e == '0' || e == '1')) {
        throw Error('La cadena sólo puede contener bits (0 ó 1).');
    }
    
    let resultado = binario.split('1').map(s => s.length);

    return Math.max(...resultado);
}

try {
    console.log(obtenerCantidadMaximaCerosConsecutivos('1001100001'));  // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadMaximaCerosConsecutivos('100010001110000000'));  // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadMaximaCerosConsecutivos({a: 42}));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadMaximaCerosConsecutivos('100010001310000000'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
