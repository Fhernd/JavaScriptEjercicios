// Ejercicio 956: Definir una función para aleatorizar la posición de los elementos de un arreglo.

function aleatorizarArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let cantidad = datos.length;

    while (cantidad) {
        let posicion = Math.floor(Math.random() * cantidad--);

        [datos[cantidad], datos[posicion]] = [datos[posicion], datos[cantidad]];
    }

    return datos;
}

try {
    console.log(aleatorizarArreglo([1, 2, 3, 4, 5]));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aleatorizarArreglo(1000));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aleatorizarArreglo(['JavaScript', 'Python', 'C++', 'Java']));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
