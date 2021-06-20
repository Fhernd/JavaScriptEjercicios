// Ejercicio 1159: Calcular el mínimo común múltiplo (MCM) entre varios números enteros.

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

function mcmVariosNumeros(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e == 'number' && Number.isInteger(e))) {
        throw TypeError('Todos los elementos del arreglo deben ser números enteros.');
    }

    let x = numeros[0];
    let y;
    for(let i = 1; i < numeros.length; ++i) {
        y = numeros[i];
        x = mcm(x, y);
    }

    return x;
}

try {
    console.log(mcmVariosNumeros([200, 180, 160, 14])); // 50400
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcmVariosNumeros([1, 2, 3, 4, 5])); // 60
} catch (e) {
    console.log(`Error: ${e.message}`);
}
