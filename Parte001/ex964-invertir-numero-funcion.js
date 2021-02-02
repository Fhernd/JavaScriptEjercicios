// Ejercicio 964: Definir una función personalizada para invertir un número entero.

// 12345
// 54321

function invertirNumero(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    if (!Number.isInteger(numero)) {
        throw Error('El argumento debe ser un número entero.');
    }

    let textoNumero = String(numero);

    return parseInt(textoNumero.split('').reverse().join(''));
}

try {
    console.log(invertirNumero(12345)); // 54321
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirNumero(123)); // 321
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirNumero("123")); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirNumero(123.456)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
