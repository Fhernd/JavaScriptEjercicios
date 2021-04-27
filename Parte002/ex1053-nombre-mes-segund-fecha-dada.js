// Ejercicio 1053: Definir una función para obtener el nombre del mes de una fecha dada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerNombreMes(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto Date.');
    }

    const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return MESES[fecha.getMonth()];
}

try {
    console.log(obtenerNombreMes(new Date('04/27/2020')));  // Abril
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNombreMes(new Date('09/27/2020')));  // Septiembre
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNombreMes('09/27/2020'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
