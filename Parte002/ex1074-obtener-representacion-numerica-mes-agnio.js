// Ejercicio 1074: Obtener representación numérica del mes con dos dígitos por medio de una función.

function obtenerMes(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).')
    }

    return (fecha.getMonth() < 9 ? '0' : '') + (fecha.getMonth() + 1);
}

try {
    console.log(obtenerMes(new Date()));    // 05
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMes(new Date(2021, 4, 9)));    // 05
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMes(new Date(2043, 11, 31)));    // 12
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMes(42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
