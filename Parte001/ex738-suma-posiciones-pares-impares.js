// Ejercicio 738: Sumar los elementos de posiciones pares e impares en acumuladores diferentes.

function sumarPosiciones(numeros) {
    if (numeros instanceof Array) {
        let sumas = [0, 0];

        for (let i = 0; i < numeros.length; ++i) {
            if (i % 2 === 0) {
                sumas[0] += numeros[i];
            } else {
                sumas[1] += numeros[i];
            }
        }

        return sumas;
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(sumarPosiciones([1, 2, 3, 4, 5, 6]));   // [9, 12]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarPosiciones("[1, 2, 3, 4, 5, 6]")); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarPosiciones([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])); // [9.9, 13.2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
