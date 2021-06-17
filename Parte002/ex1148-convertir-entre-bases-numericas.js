// Ejercicio 1148: Definir una función personalizada para convertir entre bases numéricas.

function convertirBases(numero, baseOrigen, baseDestino) {
    if (typeof baseOrigen != 'number' || !Number.isInteger(baseOrigen)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }
    
    if (typeof baseDestino != 'number' || !Number.isInteger(baseDestino)) {
        throw TypeError('El tercer argumento debe ser un número entero.');
    }

    return parseInt(String(numero), baseOrigen).toString(baseDestino);
}

try {
    console.log(convertirBases('FF', 16, 10));  // 255
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirBases(255, 10, 16));  // FF
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirBases(1001, 2, 10));  // 9
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirBases(9, 10, 2));  // 1001
} catch (e) {
    console.log(`Error: ${e.message}`);
}
