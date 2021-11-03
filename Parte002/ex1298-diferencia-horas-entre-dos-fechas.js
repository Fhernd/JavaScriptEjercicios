// Ejercicio 1298: Encontrar la diferencia en horas entre dos fechas con una función.

function calcularDiferenciaHoras(fecha1, fecha2) {
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000 / (3600);

    return Math.abs(Math.round(diferencia));
}

let fecha1 = new Date(2019, 1, 1);
let fecha2 = new Date(2019, 1, 28);

console.log(calcularDiferenciaHoras(fecha1, fecha2));

console.log();

let fecha3 = new Date(2019, 1, 1, 1, 2);
let fecha4 = new Date(2019, 1, 1, 2, 2);
console.log(calcularDiferenciaHoras(fecha3, fecha4)); // 1

console.log();

let fecha5 = new Date(2019, 1, 1, 1, 2);
let fecha6 = new Date(2019, 1, 1, 23, 2);
console.log(calcularDiferenciaHoras(fecha5, fecha6)); // 22
