// Ejercicio 1083: Agregar una cantidad arbitraria de años a una fecha en una función.

function agregarAgnios(fecha, agnios) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El primer argumento debe ser de tipo fecha (Date).');
    }

    if (typeof agnios != 'number' || !Number.isInteger(agnios)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (agnios < 0) {
        return null;
    }

    return new Date(fecha.setFullYear(fecha.getFullYear() + agnios));
}

console.log(new Date());

console.log();

try {
    console.log(agregarAgnios(new Date(), 2));  // ~ 2023
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarAgnios(new Date(1983, 2, 13), 43));  // ~ 2026
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarAgnios(42, 43));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
