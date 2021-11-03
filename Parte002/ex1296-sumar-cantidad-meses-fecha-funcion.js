// Ejercicio 1296: Sumar una cantidad de meses a una fecha específica con una función.

function agregarMesesFecha(fecha, n = 1) {
    return new Date(fecha.setMonth(fecha.getMonth() + n));
}

let fecha = new Date(2021, 10, 3);
console.log(fecha);

console.log();

let resultado = agregarMesesFecha(fecha, 7);
console.log(resultado);
