// Ejercicio 1064: Obtener el número de trimestre (1-4) de un año dado a través de una función.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerTrimetre(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    let numeroMes = fecha.getMonth() + 1;

    return Math.ceil(numeroMes / 3);
}

try {
    console.log(obtenerTrimetre(new Date()));   // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTrimetre(new Date(2017, 7, 13)));   // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTrimetre(new Date(2031, 1, 28)));   // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTrimetre(new Date(2047, 11, 29)));   // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}
