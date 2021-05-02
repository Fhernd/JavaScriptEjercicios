// Ejercicio 1060: Obtener la fecha máxima desde un arreglo utilizando una función a la medida.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerFechaMaxima(fechas) {
    if (!Array.isArray(fechas)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!fechas.every(d => esFecha(d))) {
        throw TypeError('Todos los datos del arreglo deben ser objetos de tipo fecha (Date).');
    }

    if (!fechas.length) {
        return null;
    }

    let fechaMaxima = fechas[0];

    fechas.forEach((f, i) => {
        if (f > fechaMaxima) {
            fechaMaxima = f;
        }
    });

    return fechaMaxima;
}

let fechas = [];
fechas.push(new Date(2021, 4, 13));
fechas.push(new Date(2020, 5, 10));
fechas.push(new Date(2022, 3, 12));
fechas.push(new Date(2020, 12, 31));

try {
    console.log(obtenerFechaMaxima(fechas));    // 2022-3-12
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaMaxima(1000));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
