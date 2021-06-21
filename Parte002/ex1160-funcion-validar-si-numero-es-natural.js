// Ejercicio 1160: Determinar si un valor numérico dado es natural o no a través de una función.

// N = {0, 1, 2, 3,... }

function esNatural(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    return (numero >= 0) && (Math.floor(numero) === numero) && numero != Infinity;
}

try {
    console.log(esNatural(0));
    console.log(esNatural(3));
    console.log(esNatural(1000));
    console.log(esNatural(1E6));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esNatural(0.0));
    console.log(esNatural(3.5));
    console.log(esNatural(1000.1));
    console.log(esNatural(1.3E6));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esNatural('42'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
