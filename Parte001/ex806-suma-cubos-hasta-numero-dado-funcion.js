// Ejercicio 806: Definir una función para obtener la suma de los cubos hasta cierto valor dado.

function sumarCubos(valor) {
    if (typeof valor !== 'number' || !Number.isInteger(valor)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (valor < 0) {
        return null;
    }

    let sumaCubos = 0;

    for(let i = 0; i <= valor; ++i) {
        sumaCubos += Math.pow(i, 3);
    }

    return sumaCubos;
}

try {
    console.log(sumarCubos(5)); // 1 + 8 + 27 + 64 + 125 = 225
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarCubos(100)); // 25502500
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarCubos('JS')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
