// Ejercicio 760: Encontrar la cantidad de veces necesarias para reducir un número a un dígito a partir de la suma de sus dígitos.

// 179 => 17 => 8
// 1 -> 2

function sumarDigitos(numero) {
    let suma = 0;

    while(numero) {
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }

    return suma;
}

function reducirNumero(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero >= 0) {
            let contador = 0;

            while (numero >= 10) {
                ++contador;
                numero = sumarDigitos(numero);
            }

            return contador;
        } else {
            throw Error('El número debe ser mayor o igual a 0.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(reducirNumero(179));    // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reducirNumero(1234));    // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reducirNumero(123));    // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reducirNumero(99999999999999));    // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reducirNumero('99999999999999'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
