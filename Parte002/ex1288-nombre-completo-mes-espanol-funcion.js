// Ejercicio 1288: Obtener el nombre completo del mes de una fecha con una función.

Date.nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function obtenerNombreCompletoMes(fecha) {
    return Date.nombresMeses[fecha.getMonth()];
}

// 2 noviembre de 2021:
console.log(obtenerNombreCompletoMes(new Date()));
console.log(obtenerNombreCompletoMes(new Date(2019, 3, 10)));   // Abril
