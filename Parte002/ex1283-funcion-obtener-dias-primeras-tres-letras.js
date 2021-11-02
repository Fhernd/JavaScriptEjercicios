// Ejercicio 1283: Definir una función para obtener el nombre del día con sólo tres letras.

Date.nombresDiasCortos = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'];

function obtenerNombreDiaCorto(fecha) {
    return Date.nombresDiasCortos[fecha.getDay()];
}

console.log(obtenerNombreDiaCorto(new Date()));  // 2 de noviembre de 2021, => Lun
console.log(obtenerNombreDiaCorto(new Date(2019, 0, 13)));  // Dom
