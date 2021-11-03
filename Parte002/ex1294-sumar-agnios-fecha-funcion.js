// Ejercicio 1294: Agregar una cantidad de años a una fecha dada usando una función.

function agregarCantidadAgnios(fecha, n = 1) {
    return new Date(fecha.setFullYear(fecha.getFullYear() + n));
}

let fecha = new Date(2021, 10, 3);
console.log(fecha);

console.log();

let resultado = agregarCantidadAgnios(fecha, 13);
console.log(resultado);
