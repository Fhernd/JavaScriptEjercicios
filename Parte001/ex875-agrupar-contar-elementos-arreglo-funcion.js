// Ejerciocio 875: Definir una función para contar las ocurrencias de elementos a partir de una función.

function contarElementos(datos, funcion) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    return datos.map(typeof funcion === 'function' ? funcion : d => d[funcion])
                .reduce((a, v, i) => {
                    a[v] = (a[v] || 0) + 1;

                    return a;
                }, {});
}

try {
    console.log(contarElementos(['oso', 'casa', 'ave', 'toro', 'tío', 'perro', 'gato', 'río'], 'length'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarElementos([100, 25, 25, 25, 100, 16, 16], Math.sqrt));
    // {10: 2, 5: 3, 4: 2}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarElementos(100, Math.sqrt));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
