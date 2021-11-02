// Ejercicio 1282: Definir una función para obtener el nombre de un mes con sólo tres letras.

Date.nombresMesesCortos = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function obtenerNombreMesCorto(fecha) {
    return Date.nombresMesesCortos[fecha.getMonth()];
}

console.log(obtenerNombreMesCorto(new Date()));  // 2 de noviembre de 2021, Nov
console.log(obtenerNombreMesCorto(new Date(2019, 0, 13)));  // Ene
