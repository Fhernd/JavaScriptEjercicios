// Ejercicio 1085: Agregar una cantidad arbitraria de meses a una fecha específica.

function agregarMeses(fecha, n) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El primer argumento debe ser una fecha (Date).');
    }

    if (typeof n != 'number' || !Number.isInteger(n) || n < 0) {
        throw TypeError('El segundo argumento debe ser un número entero positivo.');
    }

    return new Date(fecha.setMonth(fecha.getMonth() + n));
}

console.log(new Date());

console.log();

try {
    console.log(agregarMeses(new Date(), 17));  // 
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarMeses(new Date(1983, 0, 19), 2048));  // 2153-09-19
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarMeses(42, 2048));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
