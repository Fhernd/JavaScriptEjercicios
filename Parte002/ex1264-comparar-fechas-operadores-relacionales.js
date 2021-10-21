// Ejercicio 1264: Usar los operadores relacionales para comparar objetos de tipo fecha (Date).

function compararFechas(fecha1, fecha2) {
    if (fecha1 > fecha2) {
        return 1;
    } else if (fecha1 < fecha2) {
        return -1;
    } else {
        return 0;
    }
}

let fecha1 = new Date(2021, 7, 23);
let fecha2 = new Date();

console.log(compararFechas(fecha1, fecha2));    // -1
console.log(compararFechas(new Date(), fecha2));    // 1
console.log(compararFechas(new Date(), new Date()));    // 0