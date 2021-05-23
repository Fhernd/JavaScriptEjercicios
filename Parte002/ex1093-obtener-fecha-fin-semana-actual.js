// Ejercicio 1093: Obtener la fecha del día de fin de semana a través de una función.

function obtenerFechaFinSemana(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    let ultimoDiaSemana = fecha.getDate() - (fecha.getDay() - 1) + 6;

    return new Date(fecha.setDate(ultimoDiaSemana));
}

console.log(new Date());

console.log();

try {
    console.log(obtenerFechaFinSemana(new Date()));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaFinSemana(new Date(2021, 4, 24)));  // 2021-05-30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaFinSemana(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
