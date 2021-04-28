// Ejercicio 1054: Definir una función personalizada para comparar objetos tipo fecha (Date).

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function compararFechas(fecha1, fecha2) {
    if (!esFecha(fecha1) || !esFecha(fecha2)) {
        throw TypeError('Ambos parámetros deben ser de tipo Date.');
    }

    if (fecha1 < fecha2) {
        return -1;
    } else if (fecha1 > fecha2) {
        return 1;
    } else {
        return 0;
    }
}

try {
    console.log(compararFechas(new Date('01/01/2021'), new Date('01/02/2021')));    // -1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(compararFechas(new Date('01/02/2021'), new Date('01/02/2021')));    // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(compararFechas(new Date('01/03/2021'), new Date('01/02/2021')));    // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(compararFechas('01/02/2021', new Date('01/02/2021')));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
