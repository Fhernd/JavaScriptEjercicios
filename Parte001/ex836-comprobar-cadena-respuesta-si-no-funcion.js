// Ejercicio 836: Crear una función para comprobar si una cadena tiene el valor sí (s) o no (n).

function validarRespuesta(respuesta) {
    if (typeof respuesta != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return /^(s|sí)$/i.test(respuesta) ? true : /^(n|no)$/i.test(respuesta) ? false : false;
}

try {
    console.log(validarRespuesta('no'));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRespuesta('n'));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRespuesta('sí'));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRespuesta('s'));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRespuesta('S'));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarRespuesta(new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
