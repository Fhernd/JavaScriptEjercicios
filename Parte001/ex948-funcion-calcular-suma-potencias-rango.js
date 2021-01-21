// Ejercicio 948: Calcular la suma de todas las potencias dadas en un rango de valores.

function sumarPotencias(fin, potencia = 2, inicio = 1) {
    if (typeof fin != 'number') {
        throw TypeError('El argumento «fin» debe ser un número.');
    }
    
    if (typeof potencia != 'number') {
        throw TypeError('El argumento «potencia» debe ser un número.');
    }
    
    if (typeof inicio != 'number') {
        throw TypeError('El argumento «inicio» debe ser un número.');
    }

    return Array(fin + 1 - inicio)
        .fill(0)
        .map((x, i) => (i + inicio) ** potencia)
        .reduce((a, x) => a + x, 0);
}

try {
    console.log(sumarPotencias(10));    // 1^2 + 2^2 + ... + 9^2 + 10^2 = 385
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarPotencias(10, 3));    // 1^3 + 2^3 + ... + 9^3 + 10^3 = 3025
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarPotencias(10, 3, 5));    // 1^3 + 2^3 + ... + 5^3 = 2925
} catch (e) {
    console.log(`Error: ${e.message}`);
}
