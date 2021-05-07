// Ejercicio 1068: Formatear el valor numérico de un día por medio de una función personalizada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function formatearDia(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    return fecha.getDate() < 10 ? `0${fecha.getDate()}` : fecha.getDate();
}

try {
    console.log(formatearDia(new Date(2021, 5, 7)));    // 07
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(formatearDia(new Date(2021, 5, 13)));    // 13
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(formatearDia(42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
