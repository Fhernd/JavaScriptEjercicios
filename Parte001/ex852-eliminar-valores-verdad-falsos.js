// Ejercicio 852: Eliminar todos los valores equivalentes a false (falso) desde un arreglo.

// false => 0, NaN, false, '', "", ``, !true, ...

function eliminarFalsos(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.filter(Boolean);
}

try {
    console.log(eliminarFalsos([0, 1, Number.NaN, false, '', "", ``, !true, undefined, null, 'JavaScript', 0.5]));
    // [1, 'JavaScript', 0.5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarFalsos(100));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
