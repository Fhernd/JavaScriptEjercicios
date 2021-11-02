// Ejercicio 1291: Obtener la zona horaria de una fecha y hora dada usando una función.

function obtenerZonaHoraria(fecha) {
    return /\((.*)\)/.exec(fecha.toString())[1];
}

console.log(obtenerZonaHoraria(new Date()));    // Colombia
