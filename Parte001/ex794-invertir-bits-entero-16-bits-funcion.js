// Ejercicio 794: Crear una función para invertir los bits de un número entero de 16 bits.

function invertirBits(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 0) {
        throw Error('El número debe ser positivo.');
    }

    let resultado = 0;

    for(let i = 0; i < 16; ++i) {
        resultado = resultado * 2 + (numero % 2);

        numero = Math.floor(numero / 2);
    }

    return resultado;
}

try {
    console.log(invertirBits(10));  // 20480
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirBits(10.5));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
