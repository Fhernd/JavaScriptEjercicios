// Ejercicio 975: Definir una función para determinar si un número dado es perfecto.

// 4 => 1 + 2 = 3
// 6 => 1 + 2 + 3 = 6 [PERFECTO]
// 12 => 1 + 2 + 3 + 4 + 6 = 16
// 28 => 1 + 2 + 4 + 7 + 14 = 28 [PERFECTO]

function esNumeroPerfecto(numero) {
    if (typeof numero !== 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    if (!Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 0) {
        throw Error('El argumento debe ser un número entero mayor a 0.');
    }

    let acumulador = 0;

    for(let i = 1; i <= numero / 2; ++i) {
        if (numero % i == 0) {
            acumulador += i;
        }
    }

    return acumulador != 0 && acumulador == numero;
}

try {
    console.log(esNumeroPerfecto(4));   // false
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(6));   // true
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(12));   // false
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(28));   // true
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(496));   // true
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(8128));   // true
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto('ABC'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(1.4142));   // Error
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(esNumeroPerfecto(-28));   // Error
} catch (e) {
    console.log(`Error: ${e.message}.`);
}
