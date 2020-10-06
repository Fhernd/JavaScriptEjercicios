// Ejercicio 874: Crear una funcion para validar si una variable existe.

function variableExiste(variable) {
    if (typeof variable != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return window[variable] != undefined;
}

try {
    console.log(variableExiste('x'));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    var x = undefined;
    console.log(variableExiste('x'));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    var y = 3;
    console.log(variableExiste('y'));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(variableExiste(100));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
