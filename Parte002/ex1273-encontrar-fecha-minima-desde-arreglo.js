// Ejercicio 1273: Encontrar la fecha mínima entre un conjunto de fechas almacenadas en un arreglo.

function esFecha(dato) {
    return Object.prototype.toString.call(dato) === '[object Date]';
}

function encontrarFechaMinima(fechas) {
    if (!Array.isArray(fechas)) {
        throw TypeError('El argumento debe ser de tipo fecha.');
    }

    if (!fechas.every(esFecha)) {
        throw TypeError('Todos los elementos del arreglo deben ser objetos de tipo fecha (Date).');
    }

    let fechaMinima = fechas[0];

    fechas.forEach(e => {
        if (e < fechaMinima) {
            fechaMinima = e;
        }
    });

    return fechaMinima;
}

let fechas = [
    new Date(2021, 3, 13),
    new Date(2019, 4, 17),
    new Date(2023, 5, 9),
    new Date(2011, 9, 17)
];

try {
    console.log(encontrarFechaMinima(fechas));  // 2011/9/17
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarFechaMinima('abc'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

fechas.push('2021/11/19');

try {
    console.log(encontrarFechaMinima(fechas));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

