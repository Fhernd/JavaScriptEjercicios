// Ejercicio 1270: Crear una función para encontrar el último día de un mes de un año dado.

function obtenerUltimaFechaMes(agnio, mes) {
    return new Date(agnio, mes, 0).getDate();
}

console.log(obtenerUltimaFechaMes(2021, 10));   // 31
console.log(obtenerUltimaFechaMes(2021, 2));   // 28
console.log(obtenerUltimaFechaMes(2020, 2));   // 29
