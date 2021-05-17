// Ejercicio 1084: Agregar una cantidad arbitraria de semanas a una fecha específica.

function agregarSemanas(fecha, n) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El primer argumento debe ser una fecha (Date).');
    }

    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (n < 0) {
        throw Error('El segundo argumento debe ser un número entero positivo.');
    }

    return new Date(fecha.setDate(fecha.getDate() + (n * 7)));
}

console.log(new Date());

console.log();

try {
    console.log(agregarSemanas(new Date(), 3)); // 
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSemanas(new Date(2023, 7, 15), 37)); // 2024-04-30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSemanas(42, 37)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
