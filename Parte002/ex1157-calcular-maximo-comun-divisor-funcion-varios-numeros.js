// Ejercicio 1157: Calcular el máximo común divisor (MCD) entre varios números enteros.

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

function mcdVariosNumeros(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e == 'number' && Number.isInteger(e))) {
        throw TypeError('Todos los elementos del arreglo deben ser números enteros.');
    }

    let x = numeros[0];

    for(let i = 1; i < numeros.length; ++i) {
        let y = numeros[i];
        x = mcd(x, y);
    }

    return x;
}

try {
    console.log(mcdVariosNumeros([2, 3, 5]));   // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcdVariosNumeros([7, 21, 14]));   // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcdVariosNumeros([6, 3, 12]));   // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcdVariosNumeros([6, 18, 12, 24]));   // 6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mcdVariosNumeros(new Set()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
