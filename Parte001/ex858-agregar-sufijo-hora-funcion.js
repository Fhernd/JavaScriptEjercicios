// Ejercicio 858: Crear una función para agregar un sufijo (AM o PM) a una hora cualquiera.

function agregarSufijo(hora) {
    if(typeof hora != 'number' || !Number.isInteger(hora)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (hora < 0) {
        return null;
    }

    return hora == 0 || hora == 24 ? '12am' : hora == 12 ? '12pm' : hora % 24 < 12 ? `${(hora % 24)}am` : `${((hora - 12) % 12)}pm`;
}

try {
    console.log(agregarSufijo(13)); // 1pm
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSufijo(25)); // 1am
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSufijo(3)); // 3am
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSufijo(16)); // 4pm
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(agregarSufijo({a: 1})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
