// Ejercicio 1073: Obtener el número de la semana en formato ISO-8601 para un año dado.

function obtenerNumeroSemana(fecha) {
    if (!(fecha instanceof Date)) {
        fecha = new Date();
    }

    let nuevaFecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));

    nuevaFecha.setUTCDate(nuevaFecha.getUTCDate() + 4 - (nuevaFecha.getUTCDay() || 7));

    let primerDiaAgnio = new Date(Date.UTC(nuevaFecha.getUTCFullYear(), 0, 1));

    let numeroSemana = Math.ceil((((nuevaFecha - primerDiaAgnio) / 86400000) + 1) / 7);

    return numeroSemana;
}

console.log(obtenerNumeroSemana(new Date()));   // 18
console.log(obtenerNumeroSemana(new Date(2021, 0, 5)));   // 1
console.log(obtenerNumeroSemana(new Date(2021, 0, 13)));   // 2
