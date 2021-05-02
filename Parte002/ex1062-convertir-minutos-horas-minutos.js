// Ejercicio 1062: Convertir una cantidad de minutos en horas y minutos en una función.

function convertirTiempo(minutos) {
    if (typeof minutos != 'number' || !Number.isInteger(minutos)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (minutos < 0) {
        return null;
    }

    let horas = Math.floor(minutos / 60);
    minutos = minutos % 60;

    return {horas, minutos};
}

try {
    console.log(convertirTiempo(323));  // {horas: 5, minutos: 23}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirTiempo(360));  // {horas: 6, minutos: 0}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirTiempo(360.1));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirTiempo(-360));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
