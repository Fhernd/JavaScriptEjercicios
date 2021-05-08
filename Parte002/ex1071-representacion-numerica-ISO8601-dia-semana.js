// Ejercicio 1071: Obtener la representación numérica del día de la semana en el estándar ISO-8601.

function fechaFormatoIso8601(fecha) {
    return fecha.getDay() === 0 ? 7 : fecha.getDay();
}

console.log(fechaFormatoIso8601(new Date()));   // 6
console.log(fechaFormatoIso8601(new Date(2043, 11, 31)));   // 4
