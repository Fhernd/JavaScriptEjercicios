// Ejercicio 1080: Obtener segundos con dos dígitos con un objeto fecha dentro de una función.

function obtenerSegundos(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto fecha (Date).');
    }

    return (fecha.getSeconds() < 10 ? '0' : '') + fecha.getSeconds();
}

try {
    console.log(obtenerSegundos(new Date()));   // 30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundos(new Date(2043, 7, 23)));   // 00
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundos(new Date(2043, 7, 23, 3, 53)));   // 00
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundos(new Date(2043, 7, 23, 3, 53, 3)));   // 03
} catch (e) {
    console.log(`Error: ${e.message}`);
}
