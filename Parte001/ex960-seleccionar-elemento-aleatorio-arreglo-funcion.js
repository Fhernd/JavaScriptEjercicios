// Ejercicio 960: Definir una función para seleccionar un elemento aleatorio desde un arreglo.

function elementoAleatorio(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    let indiceAleatorio = Math.floor(Math.random() * datos.length);

    return datos[indiceAleatorio];
}

try {
    console.log(elementoAleatorio([2, 3, 5, 7, 11]));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoAleatorio(['JS', 'Python', 'C++', 'Java', 'C']));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoAleatorio(1000));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(elementoAleatorio([]));   // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
