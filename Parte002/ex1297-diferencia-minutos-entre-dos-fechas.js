// Ejercicio 1297: Encontrar la diferencia en minutos entre dos fechas con una función.

function calcularDiferenciaMinutos(fecha1, fecha2) {
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000 / 60;

    return Math.abs(Math.round(diferencia));
}

let fecha1 = new Date(2019, 1, 1);
let fecha2 = new Date(2019, 1, 28);

console.log(calcularDiferenciaMinutos(fecha1, fecha2));

console.log();

let fecha3 = new Date(2019, 1, 1, 1, 2);
let fecha4 = new Date(2019, 1, 1, 1, 59);
console.log(calcularDiferenciaMinutos(fecha3, fecha4)); // 57
