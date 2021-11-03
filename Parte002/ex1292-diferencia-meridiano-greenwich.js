// Ejercicio 1292: Calcular la diferencia entre la zona horaria actual y el Meridiano de Greenwich.

function calcularDiferenciaMeridianoGreenwich(fecha) {
    return (-fecha.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(fecha.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(fecha.getTimezoneOffset() / 60)) + '00';
}

console.log(calcularDiferenciaMeridianoGreenwich(new Date())); // -05:00
