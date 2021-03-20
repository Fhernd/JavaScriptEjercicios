// Ejercicio 1014: Usar la función reduce() para contar las ocurrencias de los elementos de un arreglo.

function contarOcurrencias(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1, a), {});
}

let numeros = [3, 5, 2, 3, 7, 5, 5, 3, 3, 11, 13, 11, 2];

try {
    console.log(contarOcurrencias(numeros));
    // {3: 4, 5: 3, 2: 2, 7: 1, 11: 2, 13: 1}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias('texto'));    // Error
    // {3: 4, 5: 3, 2: 2, 7: 1, 11: 2, 13: 1}
} catch (e) {
    console.log(`Error: ${e.message}`);
}
