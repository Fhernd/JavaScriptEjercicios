// Ejercicio 1072: Obtener el sufijo ordinal (en inglés) para un día de una fecha dada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerSufijoOrdinal(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    let diaFecha = fecha.getDate();

    if (diaFecha % 10 == 1 && diaFecha != 11) {
        return `${diaFecha}st`;
    } else if (diaFecha % 10 == 2 && diaFecha != 12) {
        return `${diaFecha}nd`;
    } else if (diaFecha % 10 == 3 && diaFecha != 13) {
        return `${diaFecha}rd`;
    } else {
        return `${diaFecha}th`;
    }
}

try {
    console.log(obtenerSufijoOrdinal(new Date()));  // 9th
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSufijoOrdinal(new Date(2021, 1, 1)));  // 1st
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSufijoOrdinal(new Date(2021, 1, 2)));  // 2nd
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSufijoOrdinal(new Date(2021, 1, 12)));  // 12th
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSufijoOrdinal(new Date(2021, 1, 23)));  // 23rd
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSufijoOrdinal(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
