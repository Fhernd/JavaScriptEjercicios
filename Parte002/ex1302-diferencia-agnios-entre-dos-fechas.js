// Ejercicio 1302: Encontrar la diferencia en años entre dos fechas con una función.

function calcularDiferenciaAgnios(fecha1, fecha2) {
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000 / (3600 * 24);

    return Math.abs(Math.round(diferencia / 365.25));
}

let fecha1 = new Date(2019, 1, 1);
let fecha2 = new Date(2023, 1, 1);

console.log(calcularDiferenciaAgnios(fecha1, fecha2));    // 4
