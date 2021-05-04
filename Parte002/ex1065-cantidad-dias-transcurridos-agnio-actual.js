// Ejercicio 1065: Determinar la cantidad de días transcurridos hasta cierta fecha de un año específico.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function diasTranscurridos(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    let actual = new Date(fecha.getTime());
    let anterior = new Date(fecha.getFullYear(), 0, 1);

    return Math.ceil((actual - anterior + 1) / 86400000);
}

try {
    console.log(diasTranscurridos(new Date())); // 124
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diasTranscurridos(new Date(2021, 11, 31))); // 365
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diasTranscurridos(new Date(2020, 11, 31))); // 366
} catch (e) {
    console.log(`Error: ${e.message}`);
}
