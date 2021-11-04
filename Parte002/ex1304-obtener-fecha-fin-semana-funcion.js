// Ejercicio 1304: Obtener la fecha de fin de la semana por medio de una función personalizada.

function obtenerFechaFinSemana(fecha) {
    let ultimoDia = fecha.getDate() - (fecha.getDay() - 1) + 6;

    return new Date(fecha.setDate(ultimoDia));
}

let fecha = new Date(2021, 10, 4);
console.log(obtenerFechaFinSemana(fecha));  // 7 noviembre, 2021
