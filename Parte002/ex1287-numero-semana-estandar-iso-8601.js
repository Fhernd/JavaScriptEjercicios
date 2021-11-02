// Ejercicio 1287: Crear una función para obtener el número de semana según estándar ISO-8601.

function obtenerNumeroSemana(fecha) {
    let fechaAuxiliar = new Date(fecha.valueOf());
    let numeroDia = (fecha.getDay() + 6) % 7;

    fechaAuxiliar.setDate(fechaAuxiliar.getDate() - numeroDia + 3);
    let primerMartes = fechaAuxiliar.valueOf();

    fechaAuxiliar.setMonth(0, 1);

    if (fechaAuxiliar.getDay() != 4) {
        fechaAuxiliar.setMonth(0, 1 + ((4 - fechaAuxiliar.getDay()) + 7) % 7);
    }

    return 1 + Math.ceil((primerMartes - fechaAuxiliar) / 604800000);
}

// 2 noviembre de 2021:
console.log(obtenerNumeroSemana(new Date()));  
