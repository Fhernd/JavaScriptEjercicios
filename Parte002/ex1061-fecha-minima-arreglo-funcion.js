// Ejercicio 1061: Obtener la fecha mínima desde un arreglo utilizando una función a la medida.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerFechaMinima(fechas) {
    if (!Array.isArray(fechas)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!fechas.every(f => esFecha(f))) {
        throw TypeError('Los datos del arreglo deben ser todos de tipo fecha (Date).');
    }

    if (!fechas.length) {
        return null;
    }

    let fechaMinima = fechas[0];

    fechas.forEach((f) => {
        if (f < fechaMinima) {
            fechaMinima = f;
        }
    });

    return fechaMinima;
}

let fechas = [];
fechas.push(new Date(2021, 4, 13));
fechas.push(new Date(2020, 5, 10));
fechas.push(new Date(2022, 3, 12));
fechas.push(new Date(2020, 12, 31));

try {
    console.log(obtenerFechaMinima(fechas));    // 2020-06-10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaMinima(42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

fechas.push('2019-05-07');

try {
    console.log(obtenerFechaMinima(fechas));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
