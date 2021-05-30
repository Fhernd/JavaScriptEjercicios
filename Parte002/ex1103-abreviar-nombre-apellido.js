// Ejercicio 1103: Abreviar el nombre de una persona a través de una función.

// John Ortiz => J. Ortiz

function abreviarNombre(nombre) {
    if (nombre.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    if (nombre.split(' ').length != 2) {
        throw Error('El nombre debe tener primer apellido segundo apellido.');
    }

    let partesNombre = nombre.split(' ');

    return `${partesNombre[0].charAt(0)}. ${partesNombre[1]}`;
}

try {
    console.log(abreviarNombre('John Ortiz'));  // J. Ortiz
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(abreviarNombre('John'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(abreviarNombre(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
