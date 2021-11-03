// Ejercicio 1293: Calcular la diferencia en segundos entre una fecha y su respectiva zona horaria.

function calcularDiferenciaZonaHoraria(fecha) {
    return -fecha.getTimezoneOffset() * 60;
}

console.log(calcularDiferenciaZonaHoraria(new Date()));

// -5 * 60 * 60 = -18000
