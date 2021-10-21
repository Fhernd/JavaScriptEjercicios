// Ejercicio 1267: Crear una función para agregar una cantidad de horas a un objeto fecha (Date).

function agregarHoras(fecha, horas) {
    return new Date(fecha.getTime() + horas * 3600000);
}

let fecha = new Date(2021, 0, 3, 11, 13);
console.log(fecha);

console.log();

let resultado = agregarHoras(fecha, 2);
console.log(resultado);
