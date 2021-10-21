// Ejercicio 1262: Usar la función getDate() para obtener la cantidad de días que tiene un mes y año dado.

function obtenerDiasMes(agnio, mes) {
    return new Date(agnio, mes, 0).getDate();
}

console.log(obtenerDiasMes(2021, 2));   // 28
console.log(obtenerDiasMes(2000, 2));   // 29
