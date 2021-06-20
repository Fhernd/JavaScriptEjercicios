// Ejercicio 1158: Calcular el mínimo común múltiplo (MCM) entre dos números enteros.

function mcd(x, y) {
    if (typeof x != 'number' || !Number.isInteger(x)) {
        throw TypeError('El primer argumento debe ser un número.');
    }
    
    if (typeof y != 'number' || !Number.isInteger(y)) {
        throw TypeError('El primer argumento debe ser un número.');
    }

    x = Math.abs(x);
    y = Math.abs(y);
    let z;

    while(y) {
        z = y;
        y = x % y;
        x = z;
    }

    return x;
}

function mcm(x, y) {
    if (typeof x != 'number' || !Number.isInteger(x)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }
    
    if (typeof y != 'number' || !Number.isInteger(y)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    return (!x || !y) ? 0 : Math.abs((x * y) / mcd(x, y));
}

try {
    console.log(mcm(15, 45));   // 45
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcm(2, 3));   // 6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

try {
    console.log(mcm({a: 42}, 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
