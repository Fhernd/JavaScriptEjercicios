// Ejercicio 1266: Crear una función para agregar una cantidad de minutos a un objeto fecha (Date).

function agregarMinutos(fecha, minutos) {
    return new Date(fecha.getTime() + minutos * 60000);
}

let fecha = new Date(2021, 0, 3, 11, 13);
console.log(fecha);

console.log();

let resultado = agregarMinutos(fecha, 10);
console.log(resultado);
