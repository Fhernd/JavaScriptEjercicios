// Ejercicio 792: Verificar si un texto empieza con un número de tres dígitos usando una expresión regular.

function empiezanConTresDigitos(texto) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres');
    }

    let patron = /^\d{3}/i;

    return patron.test(texto);
}

try {
    console.log(empiezanConTresDigitos('789 número'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(empiezanConTresDigitos('7 89 número'));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(empiezanConTresDigitos('000 número'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(empiezanConTresDigitos('00011111555 número'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(empiezanConTresDigitos({a: '089'}));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
