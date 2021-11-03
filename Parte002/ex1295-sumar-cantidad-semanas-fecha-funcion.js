// Ejercicio 1295: Sumar una cantidad de semanas a una fecha específica con una función.

function sumarSemanasFecha(fecha, n = 1) {
    return new Date(fecha.setDate(fecha.getDate() + (n * 7)));
}

let fecha = new Date(2021, 10, 3);
console.log(fecha);

console.log();

let resultado = sumarSemanasFecha(fecha, 11);
console.log(resultado);
