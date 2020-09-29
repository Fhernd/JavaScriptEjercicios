// Ejercicio 864: Crear una función para comprobar si todos los elementos de un arreglo son iguales.

function sonIguales(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    return datos.every(e => datos[0] == e);
}

try {
    console.log(sonIguales([1, 1, 1, 1, 1]));   // true
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales([1, 1, 1, 1, 2]));   // false
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales([2, 1, 1, 1, 1]));   // false
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales([1, 1, 1, 1, 1.0000000]));   // true
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales({}));   // Error
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales([]));   // null
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales(new Array()));   // null
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(sonIguales(new Array(0)));   // null
} catch (e) {
    console.log((`Error: ${e.message}`));
}
