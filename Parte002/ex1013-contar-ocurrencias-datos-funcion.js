// Ejercicio 1013: Definir una función para contar las ocurrencias de cada dato almacenado en un arreglo.

function contarOcurrencias(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let conteo = {};

    for (const d of datos) {
        if (conteo[d]) {
            conteo[d] += 1;
        } else {
            conteo[d] = 1;
        }
    }

    return conteo;
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
