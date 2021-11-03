// Ejercicio 1300: Encontrar la diferencia en semanas entre dos fechas con una función.

function calcularDiferenciaSemanas(fecha1, fecha2) {
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000 / (3600 * 24 * 7);

    return Math.abs(Math.round(diferencia));
}

let fecha1 = new Date(2019, 1, 1);
let fecha2 = new Date(2019, 1, 28);

console.log(calcularDiferenciaSemanas(fecha1, fecha2));    // 4

console.log();

let fecha3 = new Date(2019, 1, 1, 1, 2);
let fecha4 = new Date(2019, 1, 1, 2, 2);
console.log(calcularDiferenciaSemanas(fecha3, fecha4)); // 0

console.log();

let fecha5 = new Date(2019, 1, 1, 1, 2);
let fecha6 = new Date(2019, 1, 1, 23, 2);
console.log(calcularDiferenciaSemanas(fecha5, fecha6)); // 0

console.log();

let fecha7 = new Date(2019, 1, 1, 1, 2);
let fecha8 = new Date(2019, 1, 28, 23, 2);
console.log(calcularDiferenciaSemanas(fecha7, fecha8));    // 4

console.log();

let fecha9 = new Date(2019, 1, 1);
let fecha10 = new Date(2019, 1, 28);
console.log(calcularDiferenciaSemanas(fecha9, fecha10));    // 4
