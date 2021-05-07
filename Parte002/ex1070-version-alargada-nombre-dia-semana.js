// Ejercicio 1070: Obtener representación textual nombre completo día de la semana según fecha dada.


function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function versionTextoDia(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    Date.nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    return Date.nombresDias[fecha.getDay()];
}

try {
    console.log(versionTextoDia(new Date(2021, 4, 7))); // Vie
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

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
