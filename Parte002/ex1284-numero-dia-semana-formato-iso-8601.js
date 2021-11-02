// Ejercicio 1284: Obtener el número del día de la semana en formato/estándar ISO-8601.

// Lunes -> 1
// Domingo -> 7

function obtenerDiaSemanaIso8601(fecha) {
    return fecha.getDay() === 0 ? 7 : fecha.getDay();
}

console.log(obtenerDiaSemanaIso8601(new Date()));   // 2/Nov/2021 => 2
console.log(obtenerDiaSemanaIso8601(new Date(2019, 0, 13)));   // 2/Nov/2021 => 7
