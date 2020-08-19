// Ejericicio 759: Encontrar la mayor diferencia absoluta de los números de un arreglo respecto a un valor.

function mayorDiferenciaAbsoluta(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            if (n >= 0) {
                let maximaDiferenciaAbsoluta = -1;

                for(let i = 0; i < numeros.length; ++i) {
                    for(let j = i + 1; j < numeros.length; ++j) {
                        let valorAbsoluto = Math.abs(numeros[i] - numeros[j]);
                        
                        if (valorAbsoluto <= n) {
                            maximaDiferenciaAbsoluta = valorAbsoluto;
                            if (valorAbsoluto == n) {
                                j = numeros.length;
                                i = numeros.lenth;
                            }
                        }
                    }
                }

                return maximaDiferenciaAbsoluta;
            } else {
                throw Error('El segundo argumento debe ser un número entero positivo.');
            }
        } else {
            throw TypeError('El segundo argumento debe ser un número entero.');
        }
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(mayorDiferenciaAbsoluta([5, 3, 12, 17, 19, 11, 7], 5));    // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mayorDiferenciaAbsoluta([5, 3, 12, 17, 19, 11, 7], 10));    // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mayorDiferenciaAbsoluta("[5, 3, 12, 17, 19, 11, 7]", 10));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(mayorDiferenciaAbsoluta([5, 3, 12, 17, 19, 11, 7], -10));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
