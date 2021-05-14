// Ejercicio 1079: Obtener minutos con dos dígitos con un objeto fecha dentro de una función.

function obtenerMinutos(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto fecha (Date).');
    }

    return (fecha.getMinutes() < 10 ? '0' : '') + fecha.getMinutes();
}

try {
    console.log(obtenerMinutos(new Date()));    // 
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMinutos(new Date(2019, 5, 13)));    // 00
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMinutos(new Date(2019, 5, 13, 13, 17)));    // 17
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMinutos(42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
