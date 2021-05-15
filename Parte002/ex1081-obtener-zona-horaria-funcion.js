// Ejercicio 1081: Obtener la zona horaria del sistema actual con una función.

function obtenerZonaHoraria(fecha) {
    if (!(fecha instanceof Date)) {
        return null;
    }

    return /\((.*)\)/.exec(fecha.toString())[1];
}

console.log(obtenerZonaHoraria(new Date()));
