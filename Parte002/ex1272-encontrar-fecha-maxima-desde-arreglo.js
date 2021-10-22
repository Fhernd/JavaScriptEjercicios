// Ejercicio 1272: Encontrar la fecha máxima entre un conjunto de fechas almacenadas en un arreglo.

function esFecha(dato) {
    return Object.prototype.toString.call(dato) === '[object Date]';
}

function encontrarFechaMaxima(fechas) {
    if (!Array.isArray(fechas)) {
        throw TypeError('El argumento debe ser de tipo fecha.');
    }

    if (!fechas.every(esFecha)) {
        throw TypeError('Todos los elementos del arreglo deben ser objetos de tipo fecha (Date).');
    }

    let fechaMaxima = fechas[0];

    fechas.forEach(e => {
        if (e > fechaMaxima) {
            fechaMaxima = e;
        }
    });

    return fechaMaxima;
}

let fechas = [
    new Date(2021, 3, 13),
    new Date(2019, 4, 17),
    new Date(2023, 5, 9),
    new Date(2011, 9, 17)
];

try {
    console.log(encontrarFechaMaxima(fechas));  // 2023/5/9
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarFechaMaxima('abc'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

fechas.push('2021/11/19');

try {
    console.log(encontrarFechaMaxima(fechas));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
