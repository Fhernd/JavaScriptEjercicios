// Ejercicio 1092: Obtener la fecha del día de inicio de semana a través de una función.

function obtenerFechaInicioSemana(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto fecha (Date).');
    }

    let diferencia = fecha.getDate() - fecha.getDay() + (fecha.getDay() === 0 ? -6 : 1);

    return new Date(fecha.setDate(diferencia));
}

console.log(new Date());

console.log();

try {
    console.log(obtenerFechaInicioSemana(new Date()));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
