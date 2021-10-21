// Ejercicio 1271: Definir una función para obtener la fecha del día de ayer.

function obtenerFechaAyer(fecha) {
    return new Date(fecha.setDate(fecha.getDate() - 1));
}

console.log(obtenerFechaAyer(new Date(2021, 9, 23)));  // ...22
