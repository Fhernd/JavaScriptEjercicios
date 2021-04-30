// Ejercicio 1056: Definir una función para validar si una fecha corresponde con un fin de semana.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function esFinSemana(fecha) {
    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser de tipo fecha (Date).');
    }

    return fecha.getDay() == 6 || fecha.getDay() == 0;
}

try {
    console.log(esFinSemana(new Date(2021, 3, 30)));    // False
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esFinSemana(new Date(2021, 4, 1)));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esFinSemana(1000));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
