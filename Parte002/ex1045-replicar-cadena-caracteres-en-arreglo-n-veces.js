// Ejercicio 1045: Definir una función a la medida para replicar un texto n cantidad de veces.

function replicarTexto(n, texto) {
    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }

    if (n <= 0) {
        return null;
    }

    return Array.apply(null, Array(n)).map(String.prototype.valueOf, String(texto));
}

let resultado;

try {
    resultado = replicarTexto(5, 'Go');
    console.log(resultado);    // ['Go', 'Go', ...]
    console.log(resultado.length);  //5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = replicarTexto(10, 'Go');
    console.log(resultado);    // ['Go', 'Go', ...]
    console.log(resultado.length);  // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = replicarTexto(3, 10);
    console.log(resultado);    // ['10', '10', '10']
    console.log(resultado.length);  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = replicarTexto('3', 10); // Error
    console.log(resultado);    // ...
    console.log(resultado.length);  // ...
} catch (e) {
    console.log(`Error: ${e.message}`);
}
