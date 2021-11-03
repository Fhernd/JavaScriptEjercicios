// Ejercicio 1303: Obtener la fecha de inicio de semana por medio de una función personalizada.

function obtenerFechaInicioSemana(fecha) {
    let diferencia = fecha.getDate() - fecha.getDay() + (fecha.getDay() === 0 ? -6 : 1);

    return new Date(fecha.setDate(diferencia));
}

let fecha = new Date(2021, 10, 3);
console.log(fecha);

console.log();

console.log(obtenerFechaInicioSemana(fecha));   // 1 noviembre... lunes
