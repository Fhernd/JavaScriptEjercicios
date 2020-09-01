// Ejercicio 828: Clasificar valores en dos arreglos según el valor de verdad almacenado en un arreglo.

// datos = [1, 2, 3, 4, 5]
// clasificacion = [true, true, false, true, false]
// resultado = [[1, 2, 4], [3, 5]]

function clasificarDatos(datos, clasificacion) {
    if (!Array.isArray(datos) || !Array.isArray(clasificacion)) {
        throw TypeError('Ambos argumentos deben ser tipo arreglo.');
    }

    if (datos.length !== clasificacion.length) {
        throw Error('Ambos arreglos deben tener la misma cantidad de elementos.');
    }

    if (!clasificacion.every(d => typeof d === 'boolean')) {
        throw TypeError('Todos los elementos del arreglo «clasificacion» deben ser booleanos (lógicos).');
    }

    return datos.reduce((a, v, i)=> (a[clasificacion[i] ? 0 : 1].push(v), a), [[], []]);
}

try {
    console.log(clasificarDatos([1, 2, 3, 4, 5], [true, true, false, true, false]));    // [[1, 2, 4], [3, 5]]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(clasificarDatos(new Object(), [true, true, false, true, false]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(clasificarDatos([1, 2, 3, 4, 5, 6], [true, true, false, true, false]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(clasificarDatos([1, 2, 3, 4, 5], [true, true, false, true, 1]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
