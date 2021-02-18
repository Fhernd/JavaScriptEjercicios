// Ejercicio 983: Crear una función para generar un ID de una longitud especificada.

function generarId(longitud) {
    if (typeof longitud != 'number') {
        throw TypeError('El argumento longitud debe ser un número.');
    }

    if (!Number.isInteger(longitud) || longitud <= 0) {
        throw Error('El argumento longitud debe ser un número entero positivo.');
    }

    let id = '';
    const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < longitud; i++) {
        id += CARACTERES.charAt(Math.floor(Math.random() * CARACTERES.length))
    }

    return id;
}

try {
    console.log(generarId(20));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarId({a: 100}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarId(-20));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
