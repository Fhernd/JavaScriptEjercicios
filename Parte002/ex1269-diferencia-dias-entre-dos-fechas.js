// Ejercicio 1269: Calcular la diferencia en días entre dos fechas por medio de una función.

function calcularDiferenciaDias(fecha1, fecha2) {
    let fechaUtc1 = Date.UTC(fecha1.getFullYear(), fecha1.getMonth(), fecha2.getDate);
    let fechaUtc2 = Date.UTC(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate);

    let diferencia = (fecha1 - fecha2) / (1000 * 60 * 60 * 24);

    return Math.floor(diferencia);
}

let fechaHoraActual = new Date();
console.log(fechaHoraActual);

console.log();

let fecha = new Date(2001, 8, 11);
console.log(fecha);

console.log();

console.log(calcularDiferenciaDias(fechaHoraActual, fecha));    // 7345
