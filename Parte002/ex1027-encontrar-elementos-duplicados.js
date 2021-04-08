// Ejercicio 1027: Definir una función para encontrar los elementos duplicados en un arreglo.

function encontrarDatosDuplicados(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    let duplicados = [];

    for(let i = 0; i < datos.length; ++i) {
        let dato = datos[i];

        if (!duplicados.find(d => d == dato) && datos.slice(i + 1).find(d => d == dato)) {
            duplicados.push(dato);
        }
    }

    return duplicados;
}

let numeros = [3, 5, 2, 7, 11, 3, 5, 13, 5, 17, 19, 7];

try {
    console.log(encontrarDatosDuplicados(numeros)); // [3, 5, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarDatosDuplicados(100)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarDatosDuplicados([])); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
