// Ejercicio 1043: Crear una función personalizada para escoger un elemento aleatorio desde un arreglo.

function escogerDatoAleatorio(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos[Math.floor(Math.random() * datos.length)];
}

try {
    for(let i = 1; i <= 10; ++i) {
        console.log(escogerDatoAleatorio([1, 2, 3, 4, 5, 6]));
    }
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    for(let i = 1; i <= 10; ++i) {
        console.log(escogerDatoAleatorio(['JavaScript', 'C#', 'Java', 'Go', 'Python']));
    }
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    for(let i = 1; i <= 10; ++i) {
        console.log(escogerDatoAleatorio(1000));    // Error
    }
} catch (e) {
    console.log(`Error: ${e.message}`);
}
