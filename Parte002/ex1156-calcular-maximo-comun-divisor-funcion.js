// Ejercicio 1156: Calcular el máximo común divisor (MCD) entre dos números enteros.

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

try {
    console.log(mcd(12, 13));   // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcd(12, 14));   // 2

} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcd(7, 14));   // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcd('7', 14));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
