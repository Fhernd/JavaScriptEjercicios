// Ejercicio 1277: Obtener la cantidad de días transcurridos desde el inicio del año.

function obtenerDiasTranscurridos(fecha) {
    let previo = new Date(fecha.getFullYear(), 0, 1);
    let actual = new Date(fecha.getTime());

    return Math.ceil((actual - previo + 1) / 86400000);
}

let fechaActual = new Date();

console.log(fechaActual);
console.log(obtenerDiasTranscurridos(fechaActual));
