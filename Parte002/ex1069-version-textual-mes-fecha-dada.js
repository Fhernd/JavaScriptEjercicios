// Ejercicio 1069: Obtener la representación textual de un día a partir de una fecha dada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function versionTextoDia(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    Date.nombresDias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    return Date.nombresDias[fecha.getDay()];
}

try {
    console.log(versionTextoDia(new Date(2021, 4, 7))); // Vie
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log(4);

try {
    console.log(versionTextoDia(new Date())); // Vie
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(versionTextoDia(new Date(2043, 11, 31))); // Jue
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(versionTextoDia(42)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
