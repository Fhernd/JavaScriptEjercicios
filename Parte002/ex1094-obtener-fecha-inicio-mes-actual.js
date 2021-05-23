// Ejercicio 1094: Obtener la fecha del día de inicio de un mes a través de una función.

function obtenerDiaInicioMes(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    return new Date(fecha.getFullYear(), fecha.getMonth(), 1);
}

console.log(new Date());

console.log();

try {
    console.log(obtenerDiaInicioMes(new Date()).toString());   // ~ 2021-05-01, Sat
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerDiaInicioMes(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
